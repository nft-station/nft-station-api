import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskSync } from './syncs/task.sync';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [ `.env`]
    })
  ],
  controllers: [AppController],
  providers: [AppService, TaskSync],
})
export class AppModule {}
