import { Module } from '@nestjs/common';

import { MikroOrmModule } from 'nestjs-mikro-orm';
import { MikroConfigService } from './mikroConfig.service';
import { AppConfigModule } from '../config/config.module';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useClass: MikroConfigService,
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
