import { PartialType } from '@nestjs/swagger';
import { CreateAuthorDto } from './create-library.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
