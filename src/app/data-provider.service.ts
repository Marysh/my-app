import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  public todoList = [
    {
      name: 'Bootstrap 1',
      status: 'In Progress',
      allowDelete: false
    },
    {
      name: 'Bootstrap 2',
      status: 'In Progress',
      allowDelete: false
    },
    {
      name: 'Bootstrap 3',
      status: 'In Progress',
      allowDelete: false
    }
  ];

  constructor() {
  }


  addNewTask(value) {
    this.todoList.push({name: value, status: 'In Progress', allowDelete: false});
  }

}

