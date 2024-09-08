import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CountrySearchParamDto{
  @ApiProperty()
  @IsOptional()
  @IsString()
  type?: string;
}
