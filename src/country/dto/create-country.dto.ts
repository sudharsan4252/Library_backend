import { ApiProperty } from "@nestjs/swagger";
import {IsArray,ArrayNotEmpty} from 'class-validator'
export class CreateCountryDto {
    @ApiProperty()
    name:string;

   
    @ApiProperty()
     @IsArray()
    @ArrayNotEmpty()
    StateId:Number[];
}
