export class HorseDetail {
  id: number;
  breed: string;
  suit: string;
  specialization: string;
  dateOfBirth: Date;
  price: bigint;


  constructor(id: number, breed: string, suit: string, specialization: string, dateOfBirth: Date, price: bigint) {
    this.id = id;
    this.breed = breed;
    this.suit = suit;
    this.specialization = specialization;
    this.dateOfBirth = dateOfBirth;
    this.price = price;
  }
}
