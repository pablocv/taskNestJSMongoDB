import { Author } from "./author.interface";
import { Publisher } from "./publisher.interface";

export interface Book {
    book_id?: string;
    name: string;
    year: number;
    description?: string;
    price: number;
    authors? : Author[];
    publisher: Publisher;
}