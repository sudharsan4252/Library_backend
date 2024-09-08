import { ApiProperty } from "@nestjs/swagger";
import { City } from "@prisma/client";
export class CityEntity implements City {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    stateId: number;

    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
