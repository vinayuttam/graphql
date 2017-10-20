"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Base = "\ntype Query {\n  dummy: Boolean\n}\ntype Mutation {\n  dummy: Boolean\n}\n\ntype Meta {\n    count: Int\n}\n";

exports.default = function () {
  return [Base];
};