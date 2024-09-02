import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { ApiTags,ApiOkResponse,ApiCreatedResponse } from '@nestjs/swagger';
import { StateEntity } from './entities/state.entity';

@ApiTags('state')
@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  @ApiCreatedResponse({type:StateEntity})
  create(@Body() createStateDto: CreateStateDto) {
    return this.stateService.create(createStateDto);
  }

  @Get()
  @ApiOkResponse({type:StateEntity})
  findAll() {
    return this.stateService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type:StateEntity})
  findOne(@Param('id') id: string) {
    return this.stateService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({type:StateEntity})
  update(@Param('id') id: string, @Body() updateStateDto: UpdateStateDto) {
    return this.stateService.update(+id, updateStateDto);
  }

  @Delete(':id')
  @ApiOkResponse({type:StateEntity})
  remove(@Param('id') id: string) {
    return this.stateService.remove(+id);
  }
}
