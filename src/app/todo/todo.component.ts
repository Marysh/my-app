import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  showEditing;

  // editClicked: boolean = false;

  constructor(private dataProvider: DataProviderService, private editService: EditService) {
    this.showEditing = editService.showEdit;
    editService.editTriggered.subscribe(

      () => {
        // console.log(editService.showEdit)
        this.showEditing = editService.showEdit;
      }
    );
  }


  ngOnInit() {
    // console.log(this.dataProvider.todoList);
    // this.editService.showEdit
    //   .subscribe(() => {
    //
    //   });
  }

  addTask(input) {
    if (input.value !== '') {
      this.dataProvider.addNewTask(input.value);
    }
  }

}
