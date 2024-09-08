import { Injectable, HttpException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CountrySearchParamDto } from './dto/search-country.dto';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}
  create(createCountryDto: CreateCountryDto) {
    const { StateId, ...rest } = createCountryDto;
    return this.prisma.country.create({
      data: {
        ...rest,
        state: { connect: StateId.map((val: number) => ({ id: val })) },
      },
      include: {
        state: true,
      },
    });
  }

  findAll() {
    return this.prisma.country.findMany({
      include: {
        state: {
          include: {
            city: true,
          },
        },
        users: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.country.findUnique({
      where: { id },
      include: {
        users: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.prisma.country.update({
      where: { id },
      data: updateCountryDto,
    });
  }

  async remove(id: number) {
    try {
      await this.prisma.country.update({
        where: { id },
        data: { users: { set: [] } },
      });
      return await this.prisma.country.delete({ where: { id } });
    } catch (error) {
      throw new HttpException(error, 500, { cause: new Error(error) });
    }
  }

  async locationData(query: CountrySearchParamDto) {
    const { type } = query;
    if (type === 'data') {
      return this.prisma.country.findMany({
        where: {},
        select: {
          id: true,
          name: true,
          state: {
            select: {
              id: true,
              name: true,
              city: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
    }
    return this.findAll()
  }
}
