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

  saveTaskName(newName, id: number) {
    if (newName !== '') {
      this.dataProviderService.saveTaskName(newName, id);
      this.editService.hide();
    }
  }

}
