import { Bus } from "./Bus";
import { Car } from "./Car";
export declare class Driver {
    private bus;
    private car;
    constructor(bus: Bus, car: Car);
    driveBus(): void;
    driveCar(): void;
}
