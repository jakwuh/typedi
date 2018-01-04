"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = require("../Container");
var Token_1 = require("../Token");
/**
 * Marks class as a service that can be injected using Container.
 */
// export function Service<T, K extends keyof T>(options?: ServiceOptions<T, K>): Function;
/**
 * Marks class as a service that can be injected using container.
 */
function Service(optionsOrServiceName) {
    return function (target) {
        var service = {
            type: target
        };
        if (typeof optionsOrServiceName === "string" || optionsOrServiceName instanceof Token_1.Token || optionsOrServiceName && !(typeof optionsOrServiceName == 'object' && optionsOrServiceName.constructor == Object)) {
            service.id = optionsOrServiceName;
            service.multiple = optionsOrServiceName.multiple;
            service.global = optionsOrServiceName.global;
        }
        else if (optionsOrServiceName) {
            service.id = optionsOrServiceName.id;
            service.factory = optionsOrServiceName.factory;
            service.multiple = optionsOrServiceName.multiple;
            service.global = optionsOrServiceName.global;
        }
        Container_1.Container.set(service);
    };
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map