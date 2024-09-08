import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateAuthorDto } from './dto/create-library.dto';
import { UpdateAuthorDto } from './dto/update-library.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { LibraryEntity } from './entities/library.entity';



@Controller('Author')
@ApiTags('Author')
export class AuthorController {
  constructor(private readonly libraryService: LibraryService) {}

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

  //based using the querry
  @Get()
  @ApiOkResponse({type:LibraryEntity})
  findAll(){
    return this.libraryService.findAll()
  }

  //search based on author name
 @Get('searching/:search')
@ApiOkResponse({ type: LibraryEntity })
async searchByText(@Param('search') search: string) {
  if (search) {
    const results = await this.libraryService.searchByText(search);
    return results.length ? results : []; // Returning an empty array if no results found
  }
  return [];
}
// the thing i am encountering this issues is because of the params

}
