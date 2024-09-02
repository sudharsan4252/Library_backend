import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StateService {
  constructor(private prisma:PrismaService ){}
  create(createStateDto: CreateStateDto) {
  const { cityId, ...rest } = createStateDto;
  const { countryId, ...stateData } = rest;

  return this.prisma.state.create({
    data: {
      ...stateData,
      country: {
        connect: { id: countryId }
      },
      city: {
        connect: cityId.map((val) => ({ id: val }))
      }
    },
    include: {
      country: true,
      city: true,
    }
  });
}

  findAll() {
    return this.prisma.state.findMany();
  }

  findOne(id: number) {
    return this.prisma.state.findUnique({where:{id}});
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return this.prisma.state.update({where:{id},data:updateStateDto});
  }

  remove(id: number) {
    return this.prisma.state.delete({where:{id}});
  }
}
