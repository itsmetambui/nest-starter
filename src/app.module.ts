import { Module } from '@nestjs/common';

import AppController from './app.controller';
import AppService from './app.service';
import AppConfigModule from './modules/config/config.module';
import OrmModule from './modules/orm/orm.module';

@Module({
  imports: [AppConfigModule, OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
