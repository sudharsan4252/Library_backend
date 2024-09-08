import { ApiProperty } from "@nestjs/swagger";
import { Author } from "@prisma/client";
export class LibraryEntity implements Author {
    @ApiProperty()
    id: number;

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
    books: number;

    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;

    
}
