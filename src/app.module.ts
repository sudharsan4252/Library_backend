import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LibraryModule } from './library/library.module';
import { BookModule } from './book/book.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [PrismaModule, LibraryModule, BookModule, CountryModule, StateModule, CityModule, SearchModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
