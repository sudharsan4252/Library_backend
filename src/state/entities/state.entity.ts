import { State } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
export class StateEntity implements State {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    countryId: number;
}
