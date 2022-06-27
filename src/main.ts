import { Inject } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import registerSwagger from './share/configurations/swagger.config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  

  // Setting app
  const prefix = configService.get<string>('API_REFIX');
  const port =  configService.get<number>('PORT');

  app.setGlobalPrefix(prefix);
  app.enableCors();


  // Swagger
  registerSwagger(app);

  await app.listen(port);
}
bootstrap();
