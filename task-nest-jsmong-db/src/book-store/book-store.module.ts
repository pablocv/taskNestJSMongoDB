import { Module } from '@nestjs/common';
import { BookStoreController } from './book-store.controller';
import { BookStoreService } from './book-store.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema} from './schemas/author.schema';
import { BookSchema } from './schemas/book.schema';
import { PublisherSchema } from './schemas/publisher.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Author', schema: AuthorSchema}, {name: 'Book', schema: BookSchema}, {name: 'Publisher', schema: PublisherSchema}])],
  controllers: [ BookStoreController],
  providers: [BookStoreService],
})
export class BookStoreModule {}
