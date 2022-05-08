import {Horse} from "./Horse";

export class Coach {
  id: number;
  surname:string;
  name:string;
  patronymic:string;
  coachHorses:Horse[];

  constructor(id: number, surname: string, name: string, patronymic: string, horses: Horse[]) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.coachHorses = horses;
  }
}
