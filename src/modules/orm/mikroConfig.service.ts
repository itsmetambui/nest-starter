import { Injectable, Logger } from '@nestjs/common';
import {
  MikroOrmOptionsFactory,
  MikroOrmModuleOptions,
} from 'nestjs-mikro-orm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MikroConfigService implements MikroOrmOptionsFactory {
  private logger = new Logger('Mikro ORM');

  constructor(private readonly configService: ConfigService) {}

  createMikroOrmOptions(): MikroOrmModuleOptions {
    const { name, uri } = this.configService.get('database');
    return {
      dbName: name,
      clientUrl: uri,
      entitiesDirs: ['dist/entities'],
      entitiesDirsTs: ['src/entities'],
      logger: this.logger.log.bind(this.logger),
    };
  }
}
