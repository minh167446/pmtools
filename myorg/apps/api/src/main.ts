/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '../src/validation.pipe';
import { HttpErrorFilter } from './http-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const validationPipe = app
  //       .select(AppModule)
  //       .get(ValidationPipe);

  // This will cause class-validator to use the nestJS module resolution, 
  // the fallback option is to spare our selfs from importing all the class-validator modules to nestJS
  const globalPrefix = 'api/v1';
  app.useGlobalFilters(new HttpErrorFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.port || 8080;
  await app.listen(port);
  Logger.log('Server running on http://localhost:' + port, 'Bootstrap');
}

bootstrap();

