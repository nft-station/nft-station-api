import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CONTROLLER_CONSTANTS } from './share/constants/api.const';
import { ApiTags } from "@nestjs/swagger";

@Controller(CONTROLLER_CONSTANTS.APP.NAME)
@ApiTags(CONTROLLER_CONSTANTS.APP.API_TAG)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
