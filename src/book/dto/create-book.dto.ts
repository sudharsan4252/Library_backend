import { ApiProperty } from "@nestjs/swagger";
export class CreateBookDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    publishedAt: Date;

    @ApiProperty()
    authorNo:number;
}

