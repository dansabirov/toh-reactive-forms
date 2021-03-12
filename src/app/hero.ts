import { Phone } from "./phone";

export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string,
    public phone?: Phone
  ) {  }

}
