import {Component} from '@angular/core';

interface Task {
  name: string;
  status: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  tasks: Task[] = [
    {
      name: 'Bootstrap',
      status: 'In Progress',
    },
    {
      name: 'HTML',
      status: 'In Progress',
    },
    {
      name: 'Angular',
      status: 'In Progress',
    }
  ];

  changeStatus(task) {
    if (task.status === 'In Progress') {
      task.status = 'Done';
      task.status.style = 'color: green';
    } else {
      task.status = 'In Progress';
      task.status.style = 'color: red';
    }
  }

  deleteTask(task, index) {
    this.tasks.splice(index, 1);
  }

  editTaskName() {
  }
}
