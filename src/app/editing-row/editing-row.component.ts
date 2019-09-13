import {Component, Input, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider.service';
import {EditService} from '../edit.service';


@Component({
  selector: 'app-editing-row',
  templateUrl: './editing-row.component.html',
  styleUrls: ['./editing-row.component.css']
})
export class EditingRowComponent implements OnInit {
  @Input() objectToEdit;


  constructor(private dataProviderService: DataProviderService, private editService: EditService) {
  }

  ngOnInit(): void {
  }

  editTask(newName, id: number) {
    if (newName !== '') {
      this.dataProviderService.editTask({name: newName}, id);
      this.editService.hide();
    }
  }

}
