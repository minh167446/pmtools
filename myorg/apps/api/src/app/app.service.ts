import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg/datas';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}
