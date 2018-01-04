"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = require("./Token");
var ServiceNotFoundError_1 = require("./error/ServiceNotFoundError");
var MissingProvidedServiceTypeError_1 = require("./error/MissingProvidedServiceTypeError");
var Container_1 = require("./Container");
/**
 * TypeDI can have multiple containers.
 * One container is ContainerInstance.
 */
var ContainerInstance = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ContainerInstance(id) {
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        /**
         * All registered services.
         */
        this.services = [];
        this.id = id;
    }
    /**
     * Retrieves the service with given name or type from the service container.
     * Optionally, parameters can be passed in case if instance is initialized in the container for the first time.
     */
    ContainerInstance.prototype.get = function (identifier) {
        var service = this.findService(identifier);
        // in the case if service was not found registered we search in the global container for this service
        if (!service) {
            var globalService = Container_1.Container.of(undefined).findService(identifier);
            if (globalService) {
                if (globalService.global === true) {
                    service = globalService;
                }
                else {
                    service = __assign({}, globalService, { value: null });
                    this.services.push(service);
                }
            }
        }
        return this.getServiceValue(identifier, service);
    };
    /**
     * Gets all instances registered in the container of the given service identifier.
     * Used when service defined with multiple: true flag.
     */
    ContainerInstance.prototype.getMany = function (id) {
        var _this = this;
        return Promise.all(this.filterServices(id).map(function (service) { return _this.getServiceValue(id, service); }));
    };
    /**
     * Sets a value for the given type or service name in the container.
     */
    ContainerInstance.prototype.set = function (identifierOrServiceMetadata, value) {
        var _this = this;
        if (identifierOrServiceMetadata instanceof Array) {
            identifierOrServiceMetadata.forEach(function (v) { return _this.set(v); });
            return this;
        }
        if (typeof identifierOrServiceMetadata === "string" || identifierOrServiceMetadata instanceof Token_1.Token) {
            return this.set({ id: identifierOrServiceMetadata, value: value });
        }
        if (identifierOrServiceMetadata instanceof Function) {
            return this.set({ type: identifierOrServiceMetadata, id: identifierOrServiceMetadata, value: value });
        }
        // const newService: ServiceMetadata<any, any> = arguments.length === 1 && typeof identifierOrServiceMetadata === "object"  && !(identifierOrServiceMetadata instanceof Token) ? identifierOrServiceMetadata : undefined;
        var newService = identifierOrServiceMetadata;
        var service = this.findService(newService.id);
        if (service && service.multiple !== true) {
            Object.assign(service, newService);
        }
        else {
            this.services.push(newService);
        }
        return this;
    };
    /**
     * Removes services with a given service identifiers (tokens or types).
     */
    ContainerInstance.prototype.remove = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        ids.forEach(function (id) {
            _this.filterServices(id).forEach(function (service) {
                _this.services.splice(_this.services.indexOf(service), 1);
            });
        });
        return this;
    };
    /**
     * Completely resets the container by removing all previously registered services from it.
     */
    ContainerInstance.prototype.reset = function () {
        this.services = [];
        return this;
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    /**
     * Filters registered service in the with a given service identifier.
     */
    ContainerInstance.prototype.filterServices = function (identifier) {
        return this.services.filter(function (service) {
            if (service.id)
                return service.id === identifier;
            if (service.type && identifier instanceof Function)
                return service.type === identifier || identifier.prototype instanceof service.type;
            return false;
        });
    };
    /**
     * Finds registered service in the with a given service identifier.
     */
    ContainerInstance.prototype.findService = function (identifier) {
        return this.services.find(function (service) {
            if (service.id)
                return service.id === identifier;
            if (service.type && identifier instanceof Function)
                return service.type === identifier || identifier.prototype instanceof service.type;
            return false;
        });
    };
    /**
     * Gets service value.
     */
    ContainerInstance.prototype.getServiceValue = function (identifier, service) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var type, paramTypes, paramsPromises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // find if instance of this object already initialized in the container and return it if it is
                        if (service && service.value !== null && service.value !== undefined)
                            return [2 /*return*/, service.value];
                        // if named service was requested and its instance was not found plus there is not type to know what to initialize,
                        // this means service was not pre-registered and we throw an exception
                        if ((!service || !service.type) &&
                            (!service || !service.factory) &&
                            (typeof identifier === "string" || identifier instanceof Token_1.Token))
                            throw new ServiceNotFoundError_1.ServiceNotFoundError(identifier);
                        type = undefined;
                        if (service && service.type) {
                            type = service.type;
                        }
                        else if (service && service.id instanceof Function) {
                            type = service.id;
                        }
                        else if (identifier instanceof Function) {
                            type = identifier;
                        }
                        // if service was not found then create a new one and register it
                        if (!service) {
                            if (!type)
                                throw new MissingProvidedServiceTypeError_1.MissingProvidedServiceTypeError(identifier);
                            service = { type: type };
                            this.services.push(service);
                        }
                        paramTypes = type && Reflect && Reflect.getMetadata ? Reflect.getMetadata("design:paramtypes", type) : undefined;
                        paramsPromises = paramTypes ? this.initializeParams(type, paramTypes) : Promise.resolve([]);
                        // if factory is set then use it to create service instance
                        if (service.factory) {
                            service.value = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                var params, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, paramsPromises];
                                        case 1:
                                            params = (_b.sent()).filter(function (param) { return param !== undefined; });
                                            if (service.factory instanceof Array) {
                                                // use special [Type, "create"] syntax to allow factory services
                                                // in this case Type instance will be obtained from Container and its method "create" will be called
                                                resolve((_a = this.get(service.factory[0]))[service.factory[1]].apply(_a, params));
                                            }
                                            else {
                                                resolve(service.factory.apply(service, params));
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        else {
                            if (!type)
                                throw new MissingProvidedServiceTypeError_1.MissingProvidedServiceTypeError(identifier);
                            service.value = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                var params;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, paramsPromises];
                                        case 1:
                                            params = _a.sent();
                                            params.unshift(null);
                                            resolve(new (type.bind.apply(type, params))());
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        service.value = service.value.then(function (instance) {
                            if (type)
                                return _this.applyPropertyHandlers(type, instance).then(function () { return instance; });
                        }).catch(function (error) {
                            service.value = null;
                            throw error;
                        });
                        return [4 /*yield*/, service.value];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Initializes all parameter types for a given target service class.
     */
    ContainerInstance.prototype.initializeParams = function (type, paramTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.all(paramTypes.map(function (paramType, index) { return __awaiter(_this, void 0, void 0, function () {
                        var paramHandler;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    paramHandler = Container_1.Container.handlers.find(function (handler) { return handler.object === type && handler.index === index; });
                                    if (!paramHandler) return [3 /*break*/, 2];
                                    return [4 /*yield*/, paramHandler.value(this)];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2:
                                    if (!(paramType && paramType.name && !this.isTypePrimitive(paramType.name))) return [3 /*break*/, 4];
                                    return [4 /*yield*/, this.get(paramType)];
                                case 3: return [2 /*return*/, _a.sent()];
                                case 4: return [2 /*return*/, undefined];
                            }
                        });
                    }); }))];
            });
        });
    };
    /**
     * Checks if given type is primitive (e.g. string, boolean, number, object).
     */
    ContainerInstance.prototype.isTypePrimitive = function (param) {
        return ["string", "boolean", "number", "object"].indexOf(param.toLowerCase()) !== -1;
    };
    /**
     * Applies all registered handlers on a given target class.
     */
    ContainerInstance.prototype.applyPropertyHandlers = function (target, instance) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.all(Container_1.Container.handlers.map(function (handler) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (typeof handler.index === "number")
                                        return [2 /*return*/];
                                    if (handler.object.constructor !== target && !(target.prototype instanceof handler.object.constructor))
                                        return [2 /*return*/];
                                    _a = instance;
                                    _b = handler.propertyName;
                                    return [4 /*yield*/, handler.value(this)];
                                case 1:
                                    _a[_b] = _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            });
        });
    };
    return ContainerInstance;
}());
exports.ContainerInstance = ContainerInstance;
//# sourceMappingURL=ContainerInstance.js.map