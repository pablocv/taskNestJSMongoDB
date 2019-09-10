import { Author } from "../interfaces/author.interface";
import { Publisher } from "../interfaces/publisher.interface";

export class NewBookDTO{    
    readonly name: string;
    readonly year: number;
    readonly description: string;   
    readonly price: number;    
    readonly author: Author[];
    readonly publisher: Publisher;
}