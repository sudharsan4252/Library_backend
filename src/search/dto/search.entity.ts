import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString, IsNumber } from 'class-validator';

export class SearchParamsDto {
    @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
    @ApiProperty()
  @IsOptional()
  @IsNumber()
  city?: number;
@ApiProperty()
  @IsOptional()
  @IsNumber()
  state?: number;
@ApiProperty()
  @IsOptional()
  @IsNumber()
  country?: number;
@ApiProperty()
  @IsOptional()
  @IsDateString()
  startDate?: string;
@ApiProperty()
  @IsOptional()
  @IsDateString()
  endDate?: string;
}
