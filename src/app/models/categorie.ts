import { Discipline } from './discipline';
import { User } from './user';

export class Categorie {
  public id: number;
  public name: string;
  public ageStart: number;
  public ageEnd: number;
  public discipline: Discipline[];
  public users: User[];

  constructor(input?: Categorie) {
    if (input) {
      Object.assign(this, input);
    }
  }
}
