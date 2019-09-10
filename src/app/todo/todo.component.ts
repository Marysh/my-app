import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  editClicked: boolean = false;

  constructor(private dataProvider: DataProviderService) {
  }


  ngOnInit() {
    console.log(this.dataProvider.todoList);
  }

  addTask(input) {
    if (input.value !== '') {
      this.dataProvider.addNewTask(input.value);
    }
  }

}
