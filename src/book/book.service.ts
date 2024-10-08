import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { connect } from 'http2';
@Injectable()
export class BookService {
  constructor(private prisma:PrismaService){}

  //creating the book 
  create(createBookDto: CreateBookDto) {
    const {authorNo,...rest}=createBookDto;
    return this.prisma.book.create({
      data:{
        ...rest,
        authors:{create:{
          author:{connect:{id:authorNo}}
        }}
      }
    })
  }
  

  findAll() {
    return this.prisma.book.findMany({
      where:{},include:{authors:true}
    });
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({
      where:{id}
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({where:{id},data:updateBookDto});
  }

  remove(id: number) {
    return this.prisma.book.delete({where:{id},include:{
      authors:true,
    }})
  }
}
