import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';
import {EditService} from '../edit.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(public dataProvider: DataProviderService, public editService: EditService) {
  }

  ngOnInit() {
  }


  addTask(input) {
    if (input.value !== '') {
      this.dataProvider.addNewTask(input.value);
      input.value = '';
    }
  }

}
