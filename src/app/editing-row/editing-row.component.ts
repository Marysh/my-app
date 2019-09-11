import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EditService } from '../edit.service';
import { DataProviderService } from '../data-provider.service';


@Component({
  selector: 'app-editing-row',
  templateUrl: './editing-row.component.html',
  styleUrls: ['./editing-row.component.css']
})
export class EditingRowComponent implements OnInit {
  inputVal;
  @ViewChild('input', null) inputRef: ElementRef;

  constructor(private editService: EditService, private dataProviderService: DataProviderService) {
    this.setInputValue();
  }

  ngOnInit(): void {
  }

  setInputValue() {
    this.inputVal = this.dataProviderService.todoList[this.editService.getEditingElIndex()].name;
  }
  saveTaskName() {
    this.dataProviderService.todoList[this.editService.getEditingElIndex()].name = this.inputRef.nativeElement.value;
    this.editService.hide();
  }
}
