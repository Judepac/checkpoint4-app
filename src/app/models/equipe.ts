export class Equipe {
  public firstname: string;
  public lastname: string;
  public role: string;
  public citation: string;
  public domaine: string;
  public image: string;

  constructor(input?: Equipe) {
    if (input) {
      Object.assign(this, input);
    }
  }

}
