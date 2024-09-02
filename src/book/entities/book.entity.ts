import { Book } from "@prisma/client"
import { ApiProperty } from "@nestjs/swagger";
export class BookEntity implements Book{
    @ApiProperty() 
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    publishedAt: string;
}
