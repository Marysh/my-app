import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EditService {

  editingObject = null;

  constructor() {
  }

  public show(task, index) {
    this.editingObject = task;
  }

  public hide() {
    this.editingObject = null;
  }


}
