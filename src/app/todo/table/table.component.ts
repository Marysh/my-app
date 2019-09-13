import {Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {DataProviderService} from '../../data-provider.service';
import {EditService} from '../../edit.service';

interface Task {
  name: string;
  status: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  tasks = [];
  @Input() newTask: any;
  @Input() selectedRow: any;

  constructor(private dataProvide: DataProviderService, private editService: EditService, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.dataProvide.todoListStream$.subscribe((tasks) => {
      this.tasks = tasks;
      this.cdRef.markForCheck();
    });
  }


  changeStatus(task) {
    if (task.status === 'In Progress') {
      this.dataProvide.editTask({status: 'Done', allowDelete: true}, task.id);
    } else {
      this.dataProvide.editTask({status: 'In Progress', allowDelete: false}, task.id);
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
