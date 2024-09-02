import { Test, TestingModule } from '@nestjs/testing';
import { AuthorController } from './library.controller';
import { LibraryService } from './library.service';

describe('LibraryController', () => {
  let controller: AuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
      providers: [LibraryService],
    }).compile();

    controller = module.get<AuthorController>(AuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
