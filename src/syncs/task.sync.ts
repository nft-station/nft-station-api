import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../share/services/configuration.service';

@Injectable()
export class TaskSync {
  appConfig;
  constructor(private configurationService: ConfigurationService) {
    this.appConfig = this.configurationService.APP_CONFIG;
  }

  handelSyncData() {
    const codeId = '';
    const rootApi = this.appConfig.a;
  }
}
