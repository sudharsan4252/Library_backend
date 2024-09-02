import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiTags,ApiOkResponse,ApiCreatedResponse, ApiCookieAuth } from '@nestjs/swagger';
import { CountryEntity } from './entities/country.entity';
@ApiTags('Country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @ApiCreatedResponse({type:CountryEntity})
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @Get()
  @ApiOkResponse({type:CountryEntity})
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type:CountryEntity})
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type:CountryEntity})
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, updateCountryDto);
  }

  @Delete(':id')
  @ApiOkResponse({type:CountryEntity})
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
