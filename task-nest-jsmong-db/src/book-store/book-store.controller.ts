import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BookStoreService} from './book-store.service'
import { Author } from './interfaces/author.interface'
import { Book} from './interfaces/book.interface'
import { NewAuthorDTO} from './dto/newAuthor.dto'
import { NewBookDTO } from './dto/newBook.dto'
import { NewPublisherDTO } from './dto/newPublisher.dto'
import { puts } from 'util';
import { Publisher } from './interfaces/publisher.interface';

@Controller('book-store')
export class BookStoreController {
    constructor(private readonly bookStoreService: BookStoreService){}

    @Get('/authors')
    findAllAuthors(): Promise<Author[]> {
        return  this.bookStoreService.findAllAuthors();
    }
    @Get('/authors/:id')
    findOneAuthor(@Param('id') id): Promise<Author>{
        return this.bookStoreService.findOneAuthor(id);
    }
    @Post('/authors')
    createAuthor(@Body() newAuthor : NewAuthorDTO): Promise<Author>{
        return this.bookStoreService.createAuthor(newAuthor);
    }
    @Put('/authors/:id')
    updateAuthor(@Body() updateAuthor : NewAuthorDTO, @Param('id') id) : Promise<Author>{
        return this.bookStoreService.updateAuthor(updateAuthor, id);
    }
    @Delete('/authors/:id')
    deleteAuthor(@Param('id') id) : Promise<Author>{
        return this.bookStoreService.deleteAuthor(id);
    }

    @Get('/books')
    findAllBooks(): Promise<Book[]>{
        return this.bookStoreService.findAllBooks();
    }    
    @Get('/books/:id')
    findOneBook(@Param('id') id) : Promise<Book>{
        console.log(id);
        return this.bookStoreService.findOneBook(id);
    }
    @Post('/books')
    createBook(@Body() newBook : NewBookDTO) : Promise<Book>{
        return this.bookStoreService.createBook(newBook);
    }
    @Put('/books/:id')
    updateBook(@Body() updateBook: NewBookDTO, @Param('id') id) : Promise<Book>{
        console.log(id);
        return this.bookStoreService.updateBook(updateBook, id);
    }
    @Delete('/books/:id')
    deleteBook(@Param('id') id): Promise<Book>{
        return this.bookStoreService.deleteBook(id);
    }

    @Get('/publisher')
    findAllPublishers(): Promise<Publisher[]>{
        return this.bookStoreService.findAllPublishers();
    }
    @Get('/publisher/:id')
    findOnePublisher(@Param('id') id): Promise<Publisher>{
        return this.bookStoreService.findOnePublisher(id);
    }
    @Post('/publisher')
    createPublisher(@Body() newPublisher : NewPublisherDTO): Promise<Publisher>{
        return this.bookStoreService.createPublisher(newPublisher);
    }
    @Put('/publisher/:id')
    updatePublisher(@Body() updatePublisher: NewPublisherDTO, @Param('id') id): Promise<Publisher>{
        return this.bookStoreService.updatePublisher(updatePublisher, id);
    }
    @Delete('/publisher/:id')
    deletePublisher(@Param('id') id): Promise<Publisher>{
        return this.bookStoreService.deletePublisher(id);
    }

}
