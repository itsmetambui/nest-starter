import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  name: process.env.DATABASE_NAME,
  uri: process.env.DATABASE_URI,
}));
