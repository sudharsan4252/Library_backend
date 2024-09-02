import { ApiProperty } from "@nestjs/swagger";
import {IsArray,ArrayNotEmpty,IsNumber} from "class-validator"
export class CreateBookDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    publishedAt: string;

    @ApiProperty()
  @IsNumber({}, { each: true })
    authorNo?:number[];
}

