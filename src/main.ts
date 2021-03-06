import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import AppModule from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('application.port');
  await app.listen(port);
}
bootstrap();
