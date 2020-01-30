import { Categorie } from './categorie';
import { Cours } from './cours';
import { Genre } from './genre';

export class Discipline {
  public id: number;
  public name: string;
  public duree: number;
  public tarif: boolean;
  public description: string;
  public categorie: Categorie;
  public cours: Cours[];
  public genre: Genre;

  constructor(input?: Discipline) {
    if (input) {
      Object.assign(this, input);
    }
  }
}
