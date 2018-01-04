import { LoggerInterface } from "./LoggerInterface";
import { User } from "./User";
export declare class UserRepository {
    private logger;
    constructor(logger: LoggerInterface);
    save(user: User): void;
}
