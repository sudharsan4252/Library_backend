import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LibraryService } from './library/library.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
