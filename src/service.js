"use strict";
module.exports = Service;

// extends Namespace
var Namespace = require("./namespace");
/** @alias Namespace.prototype */
var NamespacePrototype = Namespace.prototype;
/** @alias Service.prototype */
var ServicePrototype = Namespace.extend(Service);

Service.className = "Service";

var Method = require("./method"),
    util   = require("./util"),
    rpc    = require("./rpc");

/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */
function Service(name, options) {
    Namespace.call(this, name, options);

    /**
     * Service methods.
     * @type {Object.<string,Method>}
     */
    this.methods = {}; // toJSON, marker

    /**
     * Cached methods as an array.
     * @type {?Method[]}
     * @private
     */
    this._methodsArray = null;
}

/**
 * Tests if the specified JSON object describes a service.
 * @param {*} json JSON object to test
 * @returns {boolean} `true` if the object describes a service
 */
Service.testJSON = function testJSON(json) {
    return Boolean(json && json.methods);
};

/**
 * Constructs a service from JSON.
 * @param {string} name Service name
 * @param {Object.<string,*>} json JSON object
 * @returns {Service} Created service
 * @throws {TypeError} If arguments are invalid
 */
Service.fromJSON = function fromJSON(name, json) {
    var service = new Service(name, json.options);
    /* istanbul ignore else */
    if (json.methods)
        Object.keys(json.methods).forEach(function(methodName) {
            service.add(Method.fromJSON(methodName, json.methods[methodName]));
        });
    return service;
};

/**
 * Methods of this service as an array for iteration.
 * @name Service#methodsArray
 * @type {Method[]}
 * @readonly
 */
Object.defineProperty(ServicePrototype, "methodsArray", {
    get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
    }
});

function clearCache(service) {
    service._methodsArray = null;
    return service;
}

/**
 * @override
 */
ServicePrototype.toJSON = function toJSON() {
    var inherited = NamespacePrototype.toJSON.call(this);
    return {
        options : inherited && inherited.options || undefined,
        methods : Namespace.arrayToJSON(this.methodsArray) || /* istanbul ignore next */ {},
        nested  : inherited && inherited.nested || undefined
    };
};

/**
 * @override
 */
ServicePrototype.get = function get(name) {
    return NamespacePrototype.get.call(this, name) || this.methods[name] || null;
};

/**
 * @override
 */
ServicePrototype.resolveAll = function resolveAll() {
    var methods = this.methodsArray;
    for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
    return NamespacePrototype.resolve.call(this);
};

/**
 * @override
 */
ServicePrototype.add = function add(object) {
    /* istanbul ignore next */
    if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
    if (object instanceof Method) {
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
    }
    return NamespacePrototype.add.call(this, object);
};

/**
 * @override
 */
ServicePrototype.remove = function remove(object) {
    if (object instanceof Method) {

        /* istanbul ignore next */
        if (this.methods[object.name] !== object)
            throw Error(object + " is not a member of " + this);

        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
    }
    return NamespacePrototype.remove.call(this, object);
};

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method} method Reflected method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCCallback} callback Callback function
 * @returns {undefined}
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {?Uint8Array} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Creates a runtime service using the specified rpc implementation.
 * @param {RPCImpl} rpcImpl {@link RPCImpl|RPC implementation}
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
 */
ServicePrototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
    var rpcService = new rpc.Service(rpcImpl);
    this.methodsArray.forEach(function(method) {
        rpcService[util.lcFirst(method.name)] = function callVirtual(request, /* optional */ callback) {
            if (!request)
                throw TypeError("request must be specified");
            if (!callback)
                return util.asPromise(callVirtual, this, request);
            if (!rpcService.$rpc)
                return callback(Error("already ended"));

            // Calls the custom RPC implementation with the reflected method and binary request data
            // and expects the rpc implementation to call its callback with the binary response data.
            return rpcImpl(method, (requestDelimited
                ? method.resolvedRequestType.encodeDelimited(request)
                : method.resolvedRequestType.encode(request)
            ).finish(), function rpcCallback(err, response) {
                if (err) {
                    rpcService.emit("error", err, method);
                    return callback(err);
                }
                if (response === null) {
                    rpcService.end(/* endedByRPC */ true);
                    return undefined;
                }
                if (!(response instanceof method.resolvedResponseType.ctor)) {
                    try {
                        response = responseDelimited
                            ? method.resolvedResponseType.decodeDelimited(response)
                            : method.resolvedResponseType.decode(response);
                    } catch (err2) {
                        rpcService.emit("error", err2, method);
                        return callback("error", err2);
                    }
                }
                rpcService.emit("data", response, method);
                return callback(null, response);
            });
        };
    });
    return rpcService;
};
