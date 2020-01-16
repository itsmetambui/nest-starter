import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config';
import configurationSchema from './config/validationSchema';

@Module({
  imports: [ConfigModule.forRoot({
    load: configuration,
    validationSchema: configurationSchema,
    validationOptions: {
      allowUnknown: false,
      abortEarly: true,
    },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
