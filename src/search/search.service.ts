import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SearchParamsDto } from './dto/search.entity';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async finduserByname(query: SearchParamsDto) {
    const { name, city, state, country, startDate, endDate } = query;

    let filters: any = {};

    if (name) {
      filters.OR = [
        {
          name: {
            contains: name,
            mode: 'insensitive',
          },
        },
        {
          books: {
            some: {
              book: {
                name: {
                  contains: name,
                  mode: 'insensitive',
                },
              },
            },
          },
        },
      ];
    }
    if (city || state || country) {
      filters.AND = [
        city ? { cityId: Number(city) } : {},
        state ? { stateId: Number(state) } : {},
        country ? { countryId: Number(country) } : {},
      ];
    }

    let result = await this.prisma.author.findMany({
      where: filters,
      select: {
        id: true,
        name: true,
        books: {
          where: {
            book: {
              name: {
                contains: name,
                mode: 'insensitive',
              },
            },
          },
          select: {
            book: {
              select: {
                name: true,
                publishedAt: true,
              },
            },
          },
        },
        city: {
          select: {
            id: true,
          },
        },
        state: {
          select: {
            id: true,
          },
        },
        country: {
          select: {
            id: true,
          },
        },
      },
    });

    // Filter by date range if startDate or endDate is provided
    if (result.length && (startDate || endDate)) {
      result = result
        .map((author) => ({
          ...author,
          books: author.books.filter((book) => {
            const publishedAt = new Date(book.book.publishedAt);
            const startDateMatch = startDate
              ? new Date(startDate) <= publishedAt
              : true;
            const endDateMatch = endDate
              ? new Date(endDate) >= publishedAt
              : true;
            return startDateMatch && endDateMatch;
          }),
        }))
        .filter((author) => author.books.length > 0);
    }

    return result;
  }
}
