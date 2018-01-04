import { BeanFactory } from "./BeanFactory";
export declare class CoffeeMaker {
    private beanFactory;
    private gulp;
    private typescript;
    constructor(beanFactory: BeanFactory, gulp: any, typescript: any);
    make(): void;
}
