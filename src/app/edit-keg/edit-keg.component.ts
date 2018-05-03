import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg} from '../model/keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent {

  @Input () childEditableKeg: Keg;
  @Output () clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}
