import { ServiceMetadata } from "./types/ServiceMetadata";
import { ObjectType } from "./types/ObjectType";
import { Token } from "./Token";
import { ServiceIdentifier } from "./types/ServiceIdentifier";
/**
 * TypeDI can have multiple containers.
 * One container is ContainerInstance.
 */
export declare class ContainerInstance {
    /**
     * Container instance id.
     */
    id: any;
    /**
     * All registered services.
     */
    private services;
    constructor(id: any);
    /**
     * Retrieves the service with given name or type from the service container.
     * Optionally, parameters can be passed in case if instance is initialized in the container for the first time.
     */
    get<T>(type: ObjectType<T>): T;
    /**
     * Retrieves the service with given name or type from the service container.
     * Optionally, parameters can be passed in case if instance is initialized in the container for the first time.
     */
    get<T>(id: string): T;
    /**
     * Retrieves the service with given name or type from the service container.
     * Optionally, parameters can be passed in case if instance is initialized in the container for the first time.
     */
    get<T>(id: Token<T>): T;
    /**
     * Gets all instances registered in the container of the given service identifier.
     * Used when service defined with multiple: true flag.
     */
    getMany<T>(id: string): Promise<T[]>;
    /**
     * Gets all instances registered in the container of the given service identifier.
     * Used when service defined with multiple: true flag.
     */
    getMany<T>(id: Token<T>): Promise<T[]>;
    /**
     * Sets a value for the given type or service name in the container.
     */
    set<T, K extends keyof T>(service: ServiceMetadata<T, K>): this;
    /**
     * Sets a value for the given type or service name in the container.
     */
    set(type: Function, value: any): this;
    /**
     * Sets a value for the given type or service name in the container.
     */
    set(name: string, value: any): this;
    /**
     * Sets a value for the given type or service name in the container.
     */
    set(token: Token<any>, value: any): this;
    /**
     * Sets a value for the given type or service name in the container.
     */
    set<T, K extends keyof T>(values: ServiceMetadata<T, K>[]): this;
    /**
     * Removes services with a given service identifiers (tokens or types).
     */
    remove(...ids: ServiceIdentifier[]): this;
    /**
     * Completely resets the container by removing all previously registered services from it.
     */
    reset(): this;
    /**
     * Filters registered service in the with a given service identifier.
     */
    private filterServices(identifier);
    /**
     * Finds registered service in the with a given service identifier.
     */
    private findService(identifier);
    /**
     * Gets service value.
     */
    private getServiceValue(identifier, service);
    /**
     * Initializes all parameter types for a given target service class.
     */
    private initializeParams(type, paramTypes);
    /**
     * Checks if given type is primitive (e.g. string, boolean, number, object).
     */
    private isTypePrimitive(param);
    /**
     * Applies all registered handlers on a given target class.
     */
    private applyPropertyHandlers(target, instance);
}
