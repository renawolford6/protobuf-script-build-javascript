"use strict";
module.exports = json_module;

var util = require("../util");

json_module.description = "JSON representation as a module";

function json_module(root, options, callback) {
    try {       
        var rootProp = util.safeProp(options.root || "default");
        var output = [
            "var $root = ($protobuf.roots" + rootProp + " || ($protobuf.roots" + rootProp + " = new $protobuf.Root()))\n"
        ];
        if (root.options) {
            var optionsJson = util.jsonSafeProp(JSON.stringify(root.options, null, 2));
            output.push(".setOptions(" + optionsJson + ")\n");
        }
        var json = util.jsonSafeProp(JSON.stringify(root.nested, null, 2).trim());
        output.push(".addJSON(" + json + ");");
        output = util.wrap(output.join(""), options);
        process.nextTick(function() {
            callback(null, output);
        });
    } catch (e) {
        return callback(e);
    }
    return undefined;
}
