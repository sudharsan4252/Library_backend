import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateAuthorDto } from './dto/create-library.dto';
import { UpdateAuthorDto } from './dto/update-library.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LibraryEntity } from './entities/library.entity';
import { promises } from 'dns';
import { Author } from '@prisma/client';

@Controller('Author')
@ApiTags('Author')
export class AuthorController {
  constructor(private readonly libraryService: LibraryService) {}

   //for getting all the author
  @Get()
  @ApiOkResponse({type:LibraryEntity})
  findAll() {
    return this.libraryService.findAll();
  }
// for finding the specific author
  @Get(':id')
  @ApiOkResponse({type:LibraryEntity})
  authorOne(@Param('id') id: string) {
    return this.libraryService.authorOne(+id);
  }
  //for creating an author
  @Post()
  @ApiCreatedResponse({type:LibraryEntity})
  createAuthor(@Body()createLibraryDto:CreateAuthorDto){
    return this.libraryService.createAuthor(createLibraryDto);
  }

  // updating an author
@Patch(':id')
@ApiOkResponse({type:LibraryEntity})
updateAuthor(@Param('id') id: String, @Body() updateLibraryDto: UpdateAuthorDto) {
  return this.libraryService.updateAuthor(+id, updateLibraryDto);
  }



  // deleting an author
  @Delete(':id')
  @ApiOkResponse({type:LibraryEntity})
  deleteAuthor(@Param('id')id:String){
    return this.libraryService.deleteAuthor(+id)
  }

}
