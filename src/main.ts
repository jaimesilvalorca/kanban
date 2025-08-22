import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(),
  //cambios por juan
  //sin cambios
  //rama sebastian
  //ultimo cambio en sbc

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true,
      transformOptions:{
        enableImplicitConversion:true
      }
    })
  )
  await app.listen(process.env.PORT ?? 1090);
}
bootstrap();
