# Changelog

## [2.0.0](https://github.com/renawolford6/protobuf-script-build-javascript/compare/protobufjs-cli-v1.0.2...protobufjs-cli-v2.0.0) (2022-11-10)


### ⚠ BREAKING CHANGES

* drop support for Node 4, 6, 8, 10 (#1764)
* move command line tool to a new package named protobufjs-cli (#1234)

### Features

* add --no-service option for pbjs static target ([#1577](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1577)) ([5b20e40](https://github.com/renawolford6/protobuf-script-build-javascript/commit/5b20e40f7b50c9d2c7157c38440770907080b8fb))
* add alt-comment CLI option ([#1692](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1692)) ([907b662](https://github.com/renawolford6/protobuf-script-build-javascript/commit/907b66287790b58c0d864be5ecca341d88df4f96))
* add getTypeUrl method to generated code ([#1463](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1463)) ([497e3b1](https://github.com/renawolford6/protobuf-script-build-javascript/commit/497e3b1542475362a0fdbb4877fbe82c44785d17))
* add null-defaults option ([#1611](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1611)) ([f869225](https://github.com/renawolford6/protobuf-script-build-javascript/commit/f869225a543e35ab258e80b2602d61fcb8217ec4))
* add support for buffer configuration ([#1372](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1372)) ([bcc708c](https://github.com/renawolford6/protobuf-script-build-javascript/commit/bcc708cb5612bd542a4729a73272ef9360b7e9ef))
* allow message.getTypeUrl provide custom typeUrlPrefix ([#1762](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1762)) ([f69ce54](https://github.com/renawolford6/protobuf-script-build-javascript/commit/f69ce54b96e33f52dfef38a6a37a32360c5b831c))
* move command line tool to a new package named protobufjs-cli ([#1234](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1234)) ([67bcdd7](https://github.com/renawolford6/protobuf-script-build-javascript/commit/67bcdd75148af4f30476250445c76aad2b6cb603))
* prepare initial publication of cli ([#1752](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1752)) ([7a16c05](https://github.com/renawolford6/protobuf-script-build-javascript/commit/7a16c050991aadbd551b6206f3218ae8a03f5208))
* proto3 optional support ([#1584](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1584)) ([65797f9](https://github.com/renawolford6/protobuf-script-build-javascript/commit/65797f9e75e224babe7c2670c253eb0a7784da09))
* update dependencies / general cleanup ([#1356](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1356)) ([40078e8](https://github.com/renawolford6/protobuf-script-build-javascript/commit/40078e8a5dd27c921ec82cdc6c33f364f030a692))


### Bug Fixes

* add import long to the generated .d.ts ([#1802](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1802)) ([e50aa65](https://github.com/renawolford6/protobuf-script-build-javascript/commit/e50aa6546edcb29063215daff28ad038c4125f72))
* **deps:** patch minimatch vulnerability ([#1704](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1704)) ([cace003](https://github.com/renawolford6/protobuf-script-build-javascript/commit/cace003fafa4eeb75dfb1acca533ac04ac75c4a9))
* **deps:** update dependency glob to v8 ([#1750](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1750)) ([74d96a1](https://github.com/renawolford6/protobuf-script-build-javascript/commit/74d96a18e34b9675e2b495e459786d298f0baee1))
* drop support for Node 4, 6, 8, 10 ([#1764](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1764)) ([5c5b7ed](https://github.com/renawolford6/protobuf-script-build-javascript/commit/5c5b7edc4b7f424711bb2e06143d4ecb2ce894f8))
* es6 export enum ([#1446](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1446)) ([909997c](https://github.com/renawolford6/protobuf-script-build-javascript/commit/909997c12edc8ef28ebb4152f987b5f0aabe9576))
* fromObject should not initialize oneof members ([#1597](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1597)) ([39a5ed3](https://github.com/renawolford6/protobuf-script-build-javascript/commit/39a5ed3239d7725d94ba6454cccb42fca94cb177))
* Import Long types ([8bd7ed9](https://github.com/renawolford6/protobuf-script-build-javascript/commit/8bd7ed9879670d5c09a06e5d0a07e253e2c461b5))
* Import Long types ([7e49c10](https://github.com/renawolford6/protobuf-script-build-javascript/commit/7e49c1016179671d14760794422e8746635d3a5c))
* proper relative path to protobufjs in cli ([#1753](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1753)) ([1d619fd](https://github.com/renawolford6/protobuf-script-build-javascript/commit/1d619fdb72db8a38a6ef48f2a92927ad4b6dcd98))
* remove unused `@types/long` ([#1785](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1785)) ([b19ea64](https://github.com/renawolford6/protobuf-script-build-javascript/commit/b19ea641351bb0e7aaffad86358070cc9a9ac2c9))
* **types:** update type deps ([#1776](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1776)) ([0406bd6](https://github.com/renawolford6/protobuf-script-build-javascript/commit/0406bd6fa571fd4a4fbcfa3f43d4e02b7025a54c))
* typo in pbjs help text ([#1552](https://github.com/renawolford6/protobuf-script-build-javascript/issues/1552)) ([93fa5ef](https://github.com/renawolford6/protobuf-script-build-javascript/commit/93fa5ef606bc6b935fe45b3bc7990244eea970b9))

## [1.0.2](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.0.1...protobufjs-cli-v1.0.2) (2022-09-09)


### Bug Fixes

* add import long to the generated .d.ts ([#1802](https://github.com/protobufjs/protobuf.js/issues/1802)) ([7c27b5a](https://github.com/protobufjs/protobuf.js/commit/7c27b5ad5d161c9f3711aa053ca704f8e1224e90))

## [1.0.1](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.0.0...protobufjs-cli-v1.0.1) (2022-08-26)


### Bug Fixes

* **deps:** update dependency glob to v8 ([#1750](https://github.com/protobufjs/protobuf.js/issues/1750)) ([8303a64](https://github.com/protobufjs/protobuf.js/commit/8303a648bc12dcea5aa8e7efa042de39011857f9))
* remove unused `@types/long` ([#1785](https://github.com/protobufjs/protobuf.js/issues/1785)) ([0f4af83](https://github.com/protobufjs/protobuf.js/commit/0f4af83e4ed3cef1ec035c2833e0b06cab0bd87f))
* **types:** update type deps ([#1776](https://github.com/protobufjs/protobuf.js/issues/1776)) ([d87978b](https://github.com/protobufjs/protobuf.js/commit/d87978b8eb2a176676c58379a89206b94a6d926a))

## [1.0.0](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v0.1.0...protobufjs-cli-v1.0.0) (2022-07-08)


### ⚠ BREAKING CHANGES

* drop support for Node 4, 6, 8, 10 (#1764)
* move command line tool to a new package named protobufjs-cli (#1234)

### Features

* add --no-service option for pbjs static target ([#1577](https://github.com/protobufjs/protobuf.js/issues/1577)) ([d01394a](https://github.com/protobufjs/protobuf.js/commit/d01394a1463062824c066b653aad53c449752202))
* add alt-comment CLI option ([#1692](https://github.com/protobufjs/protobuf.js/issues/1692)) ([7558ef0](https://github.com/protobufjs/protobuf.js/commit/7558ef0f93177978272f68f1710144a26b63e525))
* add getTypeUrl method to generated code ([#1463](https://github.com/protobufjs/protobuf.js/issues/1463)) ([d13d5d5](https://github.com/protobufjs/protobuf.js/commit/d13d5d5688052e366aa2e9169f50dfca376b32cf))
* add null-defaults option ([#1611](https://github.com/protobufjs/protobuf.js/issues/1611)) ([6e713ba](https://github.com/protobufjs/protobuf.js/commit/6e713baf54bd987ae52cbf92a4f2742c70201dc0))
* add support for buffer configuration ([#1372](https://github.com/protobufjs/protobuf.js/issues/1372)) ([101aa1a](https://github.com/protobufjs/protobuf.js/commit/101aa1a4f148516fdc83a74f54a229f06e24a5de))
* allow message.getTypeUrl provide custom typeUrlPrefix ([#1762](https://github.com/protobufjs/protobuf.js/issues/1762)) ([8aad1dd](https://github.com/protobufjs/protobuf.js/commit/8aad1dd994b1fc1f23bd71adf3a81b7a5616b210))
* move command line tool to a new package named protobufjs-cli ([#1234](https://github.com/protobufjs/protobuf.js/issues/1234)) ([da34f43](https://github.com/protobufjs/protobuf.js/commit/da34f43ccd51ad97017e139f137521782f5ef119))
* prepare initial publication of cli ([#1752](https://github.com/protobufjs/protobuf.js/issues/1752)) ([64811d5](https://github.com/protobufjs/protobuf.js/commit/64811d5878c31e4a86a39da5fec6aea35da22fcd))
* proto3 optional support ([#1584](https://github.com/protobufjs/protobuf.js/issues/1584)) ([6c4d307](https://github.com/protobufjs/protobuf.js/commit/6c4d30716a9a756dcdc21d64f9c9d069315fc5b1))
* update dependencies / general cleanup ([#1356](https://github.com/protobufjs/protobuf.js/issues/1356)) ([42f49b4](https://github.com/protobufjs/protobuf.js/commit/42f49b43f692c24c2bc1ae081b4d1ad9fa173cd7))


### Bug Fixes

* **deps:** patch minimatch vulnerability ([#1704](https://github.com/protobufjs/protobuf.js/issues/1704)) ([bac61b8](https://github.com/protobufjs/protobuf.js/commit/bac61b8c2757804bbb9c5fa0f8bc6a7bcf0bb374))
* drop support for Node 4, 6, 8, 10 ([#1764](https://github.com/protobufjs/protobuf.js/issues/1764)) ([50370dd](https://github.com/protobufjs/protobuf.js/commit/50370dd7747a0986e83ddbe51c54b97033af5ead))
* es6 export enum ([#1446](https://github.com/protobufjs/protobuf.js/issues/1446)) ([9f33784](https://github.com/protobufjs/protobuf.js/commit/9f33784350b1efc2e774bbfc087cbd2c47828748))
* fromObject should not initialize oneof members ([#1597](https://github.com/protobufjs/protobuf.js/issues/1597)) ([90afe44](https://github.com/protobufjs/protobuf.js/commit/90afe4412de8070b0c0681e5905a6e0213072a85))
* proper relative path to protobufjs in cli ([#1753](https://github.com/protobufjs/protobuf.js/issues/1753)) ([a1d6029](https://github.com/protobufjs/protobuf.js/commit/a1d60292ecb22fcf89c493c562ae07ab10ef49c9))
* typo in pbjs help text ([#1552](https://github.com/protobufjs/protobuf.js/issues/1552)) ([7f46dbe](https://github.com/protobufjs/protobuf.js/commit/7f46dbeb538a6277035a896e1ab5e1a070e28681))
