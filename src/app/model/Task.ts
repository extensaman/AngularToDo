import {Priority} from "./Priority";
import {Entity} from "./Entity";

export class Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: Priority;
  category?: Entity;
  date?: Date;


  constructor(id: number, title: string, completed: boolean, priority?: Priority, category?: Entity, date?: Date) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}
