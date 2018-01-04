import { LoggerInterface } from "./LoggerInterface";
export declare class TestLogger implements LoggerInterface {
    lastMessage: string;
    log(message: string): void;
}
