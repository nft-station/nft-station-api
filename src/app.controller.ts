import { Controller, Get } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { AppService } from './app.service';
import { APP_CONFIG } from './share/configurations/app.config';
import { CONTROLLER_CONSTANTS } from './share/constants/api.const';

@Controller(CONTROLLER_CONSTANTS.APP.NAME)
@ApiTags(CONTROLLER_CONSTANTS.APP.API_TAG)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('configs')
  // showConfig(): any {
  //   return APP_CONFIG;
  // }
}
