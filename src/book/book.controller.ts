import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags,ApiCreatedResponse,ApiOkResponse } from '@nestjs/swagger';
import { BookEntity } from './entities/book.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('book')
@ApiTags('Book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiCreatedResponse({type:BookEntity})
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @ApiOkResponse({type:BookEntity})
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type:BookEntity})
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type:BookEntity})
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  @ApiOkResponse({type:BookEntity})
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
