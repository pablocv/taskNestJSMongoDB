import{Book} from "./book.interface"

export interface Author{
    author_id?: string;
    firstName: string;
    lastName: string;
    dob: Date;
    age: number;
    //books?: [Book];
}