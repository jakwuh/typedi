import { BeanFactory } from "./BeanFactory";
import { SugarFactory } from "./SugarFactory";
import { WaterFactory } from "./WaterFactory";
export declare class CoffeeMaker {
    private beanFactory;
    private sugarFactory;
    private waterFactory;
    constructor(beanFactory: BeanFactory, sugarFactory: SugarFactory, waterFactory: WaterFactory);
    make(): void;
}
