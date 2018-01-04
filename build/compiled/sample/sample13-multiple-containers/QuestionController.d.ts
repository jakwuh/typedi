import { QuestionRepository } from "./QuestionRepository";
export declare class QuestionController {
    protected questionRepository: QuestionRepository;
    constructor(questionRepository: QuestionRepository);
    save(name: string): void;
}
