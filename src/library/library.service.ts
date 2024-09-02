import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-library.dto';
import { UpdateAuthorDto } from './dto/update-library.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Author, Prisma } from '@prisma/client';
interface User{
  id:any;
  name:any;
}

@Injectable()
export class LibraryService {

  constructor(private prisma:PrismaService){}

// for author creation
createAuthor(createAuthorDto: CreateAuthorDto) {
  const { bookIds, ...rest } = createAuthorDto;

  return this.prisma.author.create({
    data: {
      ...rest,
      books: {
        create: bookIds.map((bookId) => ({
          book: {
            connect: { id: bookId }
          }
        }))
      }
    },include:{
      books:{
        include:{
          author:true
        }
      }
    }
  });
}
  //for getting all the author
  // async findAll():Promise<Author[]> {
  //   return this.prisma.author.findMany({
  //     where:{
  //       author:true
  //     },
  //     include:{
  //       posts:true
  //     }
  //   })
  // }

  //dummy text trying
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AuthorWhereUniqueInput;
    where?: Prisma.AuthorWhereInput;
    orderBy?: Prisma.AuthorOrderByWithRelationInput;
    include?:Prisma.AuthorInclude;
  }): Promise<Author[]> {
    const { skip, take, cursor, where, orderBy,include } = params;
    return this.prisma.author.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }



  //for  getting specific author
  authorOne(id:number){
    return this.prisma.author.findUnique({
      where:{id},
      include:{
        books:{
          include:{
            author:true
          }
        }
      }
    })
  }
  // for updating a specific author
  updateAuthor(id: number, updateLibraryDto: UpdateAuthorDto) {
    return this.prisma.author.update({where:{id},data:updateLibraryDto});
  }
  // for deleting a specific author
  deleteAuthor(id:number){
    return this.prisma.author.delete({where:{id}})
  }
  
  
  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AuthorWhereUniqueInput;
    where?: Prisma.AuthorWhereInput;
    orderBy?: Prisma.AuthorOrderByWithRelationInput;
  }): Promise<Author[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.author.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
