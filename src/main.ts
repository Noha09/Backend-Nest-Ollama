import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['error', 'warn', 'log', 'debug'],
  });
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  Logger.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
}
bootstrap();
