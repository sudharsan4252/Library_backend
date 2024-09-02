import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';

@Controller('city')
@ApiTags('City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  @ApiCreatedResponse({type:CityEntity})
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Get()
  @ApiOkResponse({type:CityEntity})
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type:CityEntity})
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type:CityEntity})
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  @ApiOkResponse({type:CityEntity})
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
