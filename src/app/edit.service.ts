import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EditService {
  showEdit = false;
  editingElIndex;
  editTriggered = new EventEmitter();
  constructor() { }

  public show(index) {
    this.showEdit = true;
    this.editingElIndex = index;
    this.editTriggered.emit();
  }
  public hide() {
    this.showEdit = false;
    this.editTriggered.emit();
  }

  public getEditingElIndex() {
    return this.editingElIndex;
  }
  public reinit() {

  }



}
