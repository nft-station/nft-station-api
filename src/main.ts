import { Inject } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import registerSwagger from './share/configurations/swagger.config';
import { ConfigService } from '@nestjs/config';
import { APP_CONFIG } from './share/configurations/app.config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(APP_CONFIG.APP.API_REFIX);
  app.enableCors();

  // Swagger
  registerSwagger(app);

  await app.listen(APP_CONFIG.APP.PORT);
}
bootstrap();
