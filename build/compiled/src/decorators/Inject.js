"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = require("../Container");
var Token_1 = require("../Token");
var CannotInjectError_1 = require("../error/CannotInjectError");
/**
 * Injects a service into a class property or constructor parameter.
 */
function Inject(typeOrName) {
    return function (target, propertyName, index) {
        if (!typeOrName)
            typeOrName = function () { return Reflect.getMetadata("design:type", target, propertyName); };
        Container_1.Container.registerHandler({
            object: target,
            propertyName: propertyName,
            index: index,
            value: function (containerInstance) {
                var identifier;
                if (typeof typeOrName === "string") {
                    identifier = typeOrName;
                }
                else if (typeOrName instanceof Token_1.Token) {
                    identifier = typeOrName;
                }
                else {
                    identifier = typeOrName();
                }
                if (identifier === Object)
                    throw new CannotInjectError_1.CannotInjectError(target, propertyName);
                return containerInstance.get(identifier);
            }
        });
    };
}
exports.Inject = Inject;
//# sourceMappingURL=Inject.js.map