import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  hashPassword(password: string) {
    const salt = 10;

    return bcrypt.hashSync(password, salt);
  }

  comparePassword(passwod: string, hash: string) {
    return bcrypt.compareSync(passwod, hash);
  }
}
