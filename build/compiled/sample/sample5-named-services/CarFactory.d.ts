import { Factory } from "./Factory";
export declare class CarFactory {
    private engineFactory;
    private bodyFactory;
    wheelFactory: Factory;
    constructor(engineFactory: Factory, bodyFactory: Factory);
    create(): void;
}
