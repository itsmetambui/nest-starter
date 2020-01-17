import { Module } from '@nestjs/common';

import { MikroOrmModule } from 'nestjs-mikro-orm';
import AppController from './app.controller';
import AppService from './app.service';
import MikroConfigService from './config/services/MikroConfigService';
import AppConfigModule from './config/config.module';

@Module({
  imports: [
    AppConfigModule,
    MikroOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useClass: MikroConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
