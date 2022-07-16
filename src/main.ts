import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_CONFIG } from './share/configurations/app.config';
import registerSwagger from './share/configurations/swagger.config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  console.log('App config');
  console.log(APP_CONFIG);

  app.setGlobalPrefix(APP_CONFIG.APP.API_REFIX);
  app.enableCors();

  // Swagger
  registerSwagger(app);

  await app.listen(APP_CONFIG.APP.PORT);
}
bootstrap();
