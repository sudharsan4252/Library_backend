import { ApiProperty } from "@nestjs/swagger";
export class CreateCityDto{
    @ApiProperty()
    name: string;

    @ApiProperty()
    stateId: number;

}
