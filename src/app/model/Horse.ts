import {HorseDetail} from "./HorseDeatail";

export class Horse {
  id: number;
  nickname: string;
  horseDetail: HorseDetail;


  constructor(id: number, nickname: string, horseDetail: HorseDetail) {
    this.id = id;
    this.nickname = nickname;
    this.horseDetail = horseDetail;
  }
}
