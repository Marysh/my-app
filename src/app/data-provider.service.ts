import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  public todoList = [
    {
      name: 'Bootstrap',
      status: 'In Progress'
    }
  ];

  constructor() {
  }


  addNewTask(value) {
    this.todoList.push({name: value, status: 'In Progress'});
  }

}

