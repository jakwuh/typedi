"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerInstance_1 = require("./ContainerInstance");
/**
 * Service container.
 */
var Container = /** @class */ (function () {
    function Container() {
    }
    // -------------------------------------------------------------------------
    // Public Static Methods
    // -------------------------------------------------------------------------
    /**
     * Gets a separate container instance for the given instance id.
     */
    Container.of = function (instanceId) {
        if (instanceId === undefined)
            return this.globalInstance;
        var container = this.instances.find(function (instance) { return instance.id === instanceId; });
        if (!container) {
            container = new ContainerInstance_1.ContainerInstance(instanceId);
            this.instances.push(container);
        }
        return container;
    };
    /**
     * Retrieves the service with given name or type from the service container.
     * Optionally, parameters can be passed in case if instance is initialized in the container for the first time.
     */
    Container.get = function (identifier) {
        return this.globalInstance.get(identifier);
    };
    /**
     * Gets all instances registered in the container of the given service identifier.
     * Used when service defined with multiple: true flag.
     */
    Container.getMany = function (id) {
        return this.globalInstance.getMany(id);
    };
    /**
     * Sets a value for the given type or service name in the container.
     */
    Container.set = function (identifierOrServiceMetadata, value) {
        this.globalInstance.set(identifierOrServiceMetadata, value);
        return this;
    };
    /**
     * Removes services with a given service identifiers (tokens or types).
     */
    Container.remove = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        (_a = this.globalInstance).remove.apply(_a, ids);
        return this;
        var _a;
    };
    /**
     * Completely resets the container by removing all previously registered services and handlers from it.
     */
    Container.reset = function (containerId) {
        if (containerId) {
            var instance = this.instances.find(function (instance) { return instance.id === containerId; });
            if (instance) {
                instance.reset();
                this.instances.splice(this.instances.indexOf(instance), 1);
            }
        }
        else {
            this.globalInstance.reset();
            this.instances.forEach(function (instance) { return instance.reset(); });
        }
        return this;
    };
    /**
     * Registers a new handler.
     */
    Container.registerHandler = function (handler) {
        this.handlers.push(handler);
        return this;
    };
    /**
     * Helper method that imports given services.
     */
    Container.import = function (services) {
        return this;
    };
    // -------------------------------------------------------------------------
    // Private Static Properties
    // -------------------------------------------------------------------------
    /**
     * Global container instance.
     */
    Container.globalInstance = new ContainerInstance_1.ContainerInstance(undefined);
    /**
     * Other containers created using Container.of method.
     */
    Container.instances = [];
    /**
     * All registered handlers.
     */
    Container.handlers = [];
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=Container.js.map