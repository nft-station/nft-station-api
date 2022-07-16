import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig } from './share/configurations/app.config';
import { SharedModule } from './share/share.module';

@Global()
@Module({
  imports: [
    HttpModule,
    SharedModule,
    TypeOrmModule.forRoot(new AppConfig().typeOrmConfig())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
