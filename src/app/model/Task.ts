import {Priority} from "./Priority";
import {MenuScreenName} from "./MenuScreenName";

export class Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: Priority;
  category?: MenuScreenName;
  date?: Date;


  constructor(id: number, title: string, completed: boolean, priority?: Priority, category?: MenuScreenName, date?: Date) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}
