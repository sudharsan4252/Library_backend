import { ApiProperty } from "@nestjs/swagger";

export class CreateStateDto {
@ApiProperty()  
name: string;

@ApiProperty()
countryId: number;

@ApiProperty()

cityId:number[];
}

