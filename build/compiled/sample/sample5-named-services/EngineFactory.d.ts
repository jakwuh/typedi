import { Factory } from "./Factory";
export declare class EngineFactory implements Factory {
    private series;
    setSeries(series: string): void;
    getSeries(): string;
    create(): void;
}
