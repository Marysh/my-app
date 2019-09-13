import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  // todo
  // 1 private todoList
  // 2 create stream for getting todoList when changed, Behaviour subject

  private todoList = [
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

  public todoListStream$;

  constructor() {
    this.todoListStream$ = new BehaviorSubject(this.todoList);
  }


  addNewTask(value) {
    this.todoList = this.todoList.slice();
    this.todoList.push({name: value, status: 'In Progress', allowDelete: false, id: this.todoList.length + 1});
    this.todoListStream$.next(this.todoList);
  }

  editTask(newProps, id: number) {
    this.todoList = this.todoList.slice();
    const index = this.todoList.findIndex(todoItem => todoItem.id === id);
    const newTask = Object.assign({}, this.todoList[index], newProps);
    this.todoList.splice(index, 1, newTask);
    console.log(this.todoList);
    this.todoListStream$.next(this.todoList);


    // const currItems = this.todoListStream$.value().slice();
    // const index = currItems.findIndex(todoItem => todoItem.id === id);
    // const item = currItems[index];
    // const newItem = {...item, name: newTaskName};
    // currItems[index] = newItem;
  }

  deleteTask(task) {
    this.todoList.splice(task, 1);
    this.todoListStream$.next(this.todoList);
  }

}
