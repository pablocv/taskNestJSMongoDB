import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookStoreController } from './book-store/book-store.controller';
import { BookStoreService } from './book-store/book-store.service';
import { MongooseModule} from '@nestjs/mongoose'
import config from './book-store/config/keys'
import { BookStoreModule } from './book-store/book-store.module'
import { mongoose} from 'mongoose'
@Module({
  imports: [ BookStoreModule, MongooseModule.forRoot(config.mongoURI,{ useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
