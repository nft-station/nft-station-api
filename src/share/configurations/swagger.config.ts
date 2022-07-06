import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const registerSwagger = (app: any) => {
  const config = new DocumentBuilder()
    .setTitle('NFT Station APIs')
    .setDescription('')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documents', app, document);
};

export default registerSwagger;
