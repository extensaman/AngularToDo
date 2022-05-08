import {MenuScreenName} from "../model/MenuScreenName";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
  static categories: MenuScreenName[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить полный бак топлива',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[3],
      date: new Date('2020-1-20'),
    },

    {
      id: 2,
      title: 'Передать отчеты на работе',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2022-6-10'),
    },

  ];
}
