import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { AuthorController } from './library.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AuthorController],
  providers: [LibraryService],
  imports:[PrismaModule],
})
export class LibraryModule {}
