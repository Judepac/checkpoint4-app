import { Discipline } from './discipline';
import { User } from './user';

export class Cours {
  public id: number;
  public capacity: number;
  public formateurName: string;
  public date: string;
  public time: string;
  public liue: string;
  public disciplines: Discipline;
  public users: User[];

  constructor(input?: Cours) {
    if (input) {
      Object.assign(this, input);
    }
  }

}
