import { Engine } from "./Engine";
import { Wheel } from "./Wheel";
import { Car } from "./Car";
export declare class CarFactory {
    private engine;
    private wheel;
    constructor(engine: Engine, wheel: Wheel);
    create(): Car;
}
