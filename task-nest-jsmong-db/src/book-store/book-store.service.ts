import { Injectable } from '@nestjs/common';
import { Author } from './interfaces/author.interface'
import { Book } from './interfaces/book.interface'
import { Publisher } from './interfaces/publisher.interface';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'



@Injectable()
export class BookStoreService {
    constructor(@InjectModel('Author') private readonly authorModel:Model<Author>,
                @InjectModel('Book') private readonly bookModel: Model<Book>,
                @InjectModel('Publisher') private readonly publisherModel: Model<Publisher>
                ){}

    async findAllAuthors(): Promise<Author[]>{
        return await this.authorModel.find();
    }
    async findOneAuthor(id:string): Promise<Author>{
        return await this.authorModel.find({_id:id});
    }
    async createAuthor(author: Author): Promise<Author>{
        const newAuthor = new this.authorModel(author);        
        return await newAuthor.save();        
    }
    async updateAuthor(author: Author, id:string): Promise<Author>{
        return await this.authorModel.findOneAndUpdate(id, author, {new: true});
    }
    async deleteAuthor(id:string):Promise<Author>{        
        return await this.authorModel.findOneAndRemove({_id: id});
    }

    async findAllBooks(): Promise<Book[]>{
        return await this.bookModel.find()
        .populate({path: 'authors', model: this.authorModel})
        .populate({path: 'publisher', model: this.publisherModel})
        .exec();
    }
    async findOneBook(id:string) : Promise<Book>{
        return await this.bookModel.findOne({_id:id})
        .populate({path: 'authors', model: this.authorModel})
        .populate({path: 'publisher', model: this.publisherModel}).exec();
    }
    async createBook(book: Book): Promise<Book>{
        const newBook = new this.bookModel(book);
        return await newBook.save();
    }
    async updateBook(book: Book, id:string) : Promise<Book>{
        return await this.bookModel.findByIdAndUpdate(id, book, {new: true});
    }
    async deleteBook(id:string): Promise<Book>{
        return await this.bookModel.findOneAndRemove({_id: id});
    }

    async findAllPublishers(): Promise<Publisher[]>{
        return await this.publisherModel.find();
    }
    async findOnePublisher(id:string): Promise<Publisher>{
        return await this.publisherModel.find({_id: id});
    }
    async createPublisher(publisher: Publisher): Promise<Publisher>{
        const newPublisher = new this.publisherModel(publisher);
        return await newPublisher.save();
    }
    async updatePublisher(publisher:Publisher, id:string) : Promise<Publisher>{
        return await this.publisherModel.findOneAndUpdate(id,publisher, {new : true});
    }
    async deletePublisher(id:string): Promise<Publisher>{
        return await this.publisherModel.findOneAndRemove({_id:id});
    }
}
