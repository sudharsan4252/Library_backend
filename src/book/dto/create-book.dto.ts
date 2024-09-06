import { ApiProperty } from "@nestjs/swagger";
export class CreateBookDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    publishedAt: string;

    @ApiProperty()
    authorNo:number;
}

