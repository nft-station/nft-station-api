import { Injectable } from '@nestjs/common';
import { APP_CONFIG } from '../share/configurations/app.config';
import { ConfigurationService } from '../share/services/configuration.service';

@Injectable()
export class TaskSync {
  private nodeApis = APP_CONFIG.NODE.API;

  constructor() {
    
  }

  handelSyncData() {
    const codeId = '';
  }
}
