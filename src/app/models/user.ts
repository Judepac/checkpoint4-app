export class User {
  public id: number;
  public firstname: string;
  public lastname: string;
  public age: number;
  public phone: string;
  public email: string;
  public password: string;
  public role: string;
  public citation: string;
  public domaine: string;
  public image: string;

  constructor(input?: User) {
    if (input) {
      Object.assign(this, input);
    }
  }
}
