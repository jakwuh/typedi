import { Driver } from "./Driver";
import { Engine } from "./Engine";
export declare abstract class Car {
    driver: Driver;
    engine: Engine;
    year: number;
    abstract drive(): void;
}
