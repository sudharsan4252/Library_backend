import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-library.dto';
import { UpdateAuthorDto } from './dto/update-library.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class LibraryService {

  constructor(private prisma:PrismaService){}

// for author creation
// working good till all fine
  findAll(){
    return this.prisma.author.findMany({include:{
      books:{
        select:{
          book:{
            select:{
              name:true,
              publishedAt:true
            }
          }
        }
      }
    }})
  }
//creating the author
  createAuthor(createBookDto:CreateAuthorDto){
    const {books,...rest}=createBookDto;
    return this.prisma.author.create({
      data:{...rest,
        books: {
        create: books.map((bookId) => ({
          book: {
            connect: { id: bookId },
          },
        })),
      },
    },
    include:{
      books:{
        include:{
          book:{
            select:{
              name:true,
              publishedAt:true
            }
          }
        }
      }
    }
    })
  }



  // for  getting specific author
  authorOne(id:number){
    return this.prisma.author.findUnique({
      where:{id:id},
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
    const {books,...rest}=updateLibraryDto;
    return this.prisma.author.update({where:{id},data:{...rest,
      books:books && books.length > 0 ?{
    create:books.map((bookid)=>({
          book:{
            connect:{id:bookid}
          }
        }))
      }:undefined
    },
    include:{
      books:{
        include:{
          book:{
            select:{
              name:true,
              publishedAt:true
            }
          }
        }
      }
    }
  });
  }

  // for deleting a specific author
  deleteAuthor(id:number){
    return this.prisma.author.delete({where:{id}})
  }

  //by finding the author with the specific fields

  async searchByText(searchTerm: string) {
  return this.prisma.author.findMany({
    where: {
      name: {
        contains: searchTerm, // Partial match search using Prisma's `contains`
        mode: 'insensitive', // Case-insensitive search
      },
    },
  });
}

// async finduserByname(name: string,startDate?: string, endDate?: string) {
// if(name){
//    return this.prisma.author.findMany({
//     where: {
//       OR: [
//         {
//           name: {
//             contains: name, // Search for partial match in author name
//             mode: 'insensitive',
//           },
//         },
//         {
//           books: {
//             some: {
//               book: {
//                 name: {
//                   contains: name, 
//                   mode: 'insensitive',
//                 },
//                 publishedAt:{
//                   gte:startDate?new Date(startDate):undefined,
//                   lte:endDate?new Date(endDate):undefined
//                 }
//               },
//             },
//           },
//         },
//       ],
//     },
//     include: {
//       books: {
//         select: {
//           book: {
//             select: {
//               name: true,
//               publishedAt: true,
//             },
//           },
//         },
//       },
//     },
//   });
// } return this.prisma.author.findMany()
 
// }



}
