import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './share/share.module';
import { TaskSync } from './syncs/task.sync';

@Global()
@Module({
  imports: [
    HttpModule,
    SharedModule
  ],
  controllers: [AppController],
  providers: [AppService, TaskSync],
})
export class AppModule {}
