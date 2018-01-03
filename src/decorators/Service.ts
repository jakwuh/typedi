import {ServiceMetadata} from "../types/ServiceMetadata";
import {Container} from "../Container";
import {ServiceOptions} from "../types/ServiceOptions";
import {Token} from "../Token";

/**
 * Marks class as a service that can be injected using Container.
 */
export function Service(): Function;

/**
 * Marks class as a service that can be injected using Container.
 */
export function Service(name: string): Function;

/**
 * Marks class as a service that can be injected using Container.
 */
export function Service(token: Token<any> | Function): Function;


/**
 * Marks class as a service that can be injected using Container.
 */
// export function Service<T, K extends keyof T>(options?: ServiceOptions<T, K>): Function;

/**
 * Marks class as a service that can be injected using container.
 */
export function Service<T, K extends keyof T>(optionsOrServiceName?: Function|ServiceOptions<T, K>|Token<any>|string): Function {
    return function(target: Function) {
        const service: ServiceMetadata<T, K> = {
            type: target
        };

        if (typeof optionsOrServiceName === "string" || optionsOrServiceName instanceof Token || optionsOrServiceName && !(typeof optionsOrServiceName == 'object' && optionsOrServiceName.constructor == Object)) {
            service.id = optionsOrServiceName as any;
            service.multiple = (optionsOrServiceName as ServiceOptions<T, K>).multiple;
            service.global = (optionsOrServiceName as ServiceOptions<T, K>).global;

        } else if (optionsOrServiceName) { // ServiceOptions
            service.id = (optionsOrServiceName as ServiceOptions<T, K>).id;
            service.factory = (optionsOrServiceName as ServiceOptions<T, K>).factory;
            service.multiple = (optionsOrServiceName as ServiceOptions<T, K>).multiple;
            service.global = (optionsOrServiceName as ServiceOptions<T, K>).global;
        }

        Container.set(service);
    };
}
