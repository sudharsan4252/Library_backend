import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class CountryService {
  constructor(private prisma:PrismaService){}
  create(createCountryDto: CreateCountryDto) {
    const {StateId,...rest} = createCountryDto;
    return this.prisma.country.create({data: {
          ...rest,
          state: { connect: StateId.map((val:number) => ({ id: val }))}
        
        },include:{
          state:true,
        }})
  }

  findAll() {
    return this.prisma.country.findMany({
      include:{
        state:{
          include:{
            city:true,
          }
        },users:{
          select:{
            name:true,
            email:true
          }
        }
      },
      
    })
  }

  findOne(id: number) {
    return this.prisma.country.findUnique({where:{id}});
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.prisma.country.update({where:{id},data:updateCountryDto});
  }

  remove(id: number) {
    return this.prisma.country.delete({where:{id}});
  }
}
