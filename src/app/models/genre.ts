import { Discipline } from './discipline';
export class Genre {
  public id: number;
  public name: string;
  public disciplines: Discipline[];

  constructor(input?: Genre) {
    if (input) {
      Object.assign(this, input);
    }
  }
}
