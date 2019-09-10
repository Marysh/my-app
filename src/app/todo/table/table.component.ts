import {Component, EventEmitter, OnChanges, Output, Input, OnInit} from '@angular/core';
import {DataProviderService} from '../../data-provider.service';

interface Task {
  name: string;
  status: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tasks;
  @Input() newTask: any;
  @Input() selectedRow: any;

  allowDelete = false;

  constructor(private dataProvide: DataProviderService) {

  }

  ngOnInit() {
    this.tasks = this.dataProvide.todoList;
  }


  changeStatus(task) {
    if (task.status === 'In Progress') {
      task.status = 'Done';
      this.allowDelete = true;
    } else {
      task.status = 'In Progress';
      this.allowDelete = false;
    }
  }

  editTaskName(task, i) {

  }
  setColor(task) {
    return task.status === 'In Progress' ? '#ff6548' : 'red';
  }

  deleteTask(task, index) {
    this.tasks.splice(index, 1);
  }

  saveTaskName(task, i) {
  }

}
