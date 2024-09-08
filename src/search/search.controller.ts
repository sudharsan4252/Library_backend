import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { SearchParamsDto } from './dto/search.entity';

@Controller('search')
@ApiTags('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false, type: String })
  @ApiQuery({ name: 'city', required: false, type: Number })
  @ApiQuery({ name: 'state', required: false, type: Number })
  @ApiQuery({ name: 'country', required: false, type: Number })
  @ApiQuery({ name: 'startDate', required: false, type: String })
  @ApiQuery({ name: 'endDate', required: false, type: String })
  getUsers(@Query() query: SearchParamsDto) {
    return this.searchService.finduserByname(query);
  }
}
