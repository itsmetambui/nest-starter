import { Entity, Property } from 'mikro-orm';
import { IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt';

import BaseEntity from './BaseEntity';

@Entity()
export default class User extends BaseEntity {
  @Property()
  @IsEmail()
  email: string;

  @Property()
  password: string;

  @Property()
  salt: string;

  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(password, this.salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
