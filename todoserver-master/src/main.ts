import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // console.log('hello');
  const logger = new Logger();
  const port = 3001;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);

  logger.log(`Application is listening on Port: ${port}...`);
}
bootstrap();

/* 
  & validator
  npm i class-validator class-transformer
*/
