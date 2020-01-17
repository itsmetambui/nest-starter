import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '.';
import configurationSchema from './validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configuration,
      validationSchema: configurationSchema,
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
      },
    }),
  ],
  exports: [ConfigModule],
})
export default class AppConfigModule {}
