import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  host = 'http://localhost:8080/';

  getHost() {
    return this.host;
  }


}
