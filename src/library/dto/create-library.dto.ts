import { ApiProperty } from "@nestjs/swagger";
import { Author } from "@prisma/client";
import {IsOptional,IsNumber} from "class-validator"
export class CreateAuthorDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    Dob: string;

    @ApiProperty()
    cityId: number;

    @ApiProperty()
    stateId: number;

    @ApiProperty()
    countryId: number;

    @ApiProperty()
    books?:number[];
}

