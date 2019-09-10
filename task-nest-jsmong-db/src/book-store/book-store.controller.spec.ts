import { Test, TestingModule } from '@nestjs/testing';
import { BookStoreController } from './book-store.controller';

describe('BookStore Controller', () => {
  let controller: BookStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookStoreController],
    }).compile();

    controller = module.get<BookStoreController>(BookStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
