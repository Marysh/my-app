import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  public todoList = [
    {
      name: 'Bootstrap 1',
      status: 'In Progress',
      allowDelete: false,
      id: 1
    },
    {
      name: 'Bootstrap 2',
      status: 'In Progress',
      allowDelete: false,
      id: 2
    },
    {
      name: 'Bootstrap 3',
      status: 'In Progress',
      allowDelete: false,
      id: 3
    }
  ];

  constructor() {
  }


  addNewTask(value) {
    this.todoList.push({name: value, status: 'In Progress', allowDelete: false});
  }

  saveTaskName(newTaskName, id: number) {
    const index = this.todoList.findIndex(todoItem => todoItem.id === id);
    this.todoList[index].name = newTaskName;
  }

  deleteTask() {

  }

}
