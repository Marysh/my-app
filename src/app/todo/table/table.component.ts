import {Component, Input, OnInit} from '@angular/core';
import {DataProviderService} from '../../data-provider.service';
import {EditService} from '../../edit.service';

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

  constructor(private dataProvide: DataProviderService, private editService: EditService) {

  }

  ngOnInit() {
    this.tasks = this.dataProvide.todoList;
  }


  changeStatus(task) {
    if (task.status === 'In Progress') {
      task.status = 'Done';
      task.allowDelete = true;
    } else {
      task.status = 'In Progress';
      task.allowDelete = false;
    }
  }

  editTaskName(task, i) {
    if (this.editService.editingObject === task) {
      this.editService.editingObject = null;
    } else {
      this.editService.show(task, i);
    }
  }

  setColor(task) {
    return task.status === 'In Progress' ? '#ff6548' : 'red';
  }

  deleteTask(index) {
    this.dataProvide.deleteTask(index);
    this.editService.hide();
  }


}
