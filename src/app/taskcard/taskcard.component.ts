import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-taskcard',
  standalone: true,
  imports: [],
  templateUrl: './taskcard.component.html',
  styleUrl: './taskcard.component.scss'
})
export class TaskcardComponent {

  @Input()
  active?:any

  @Output()
  status = new EventEmitter<String>

  @Output()
  cardstatus = new EventEmitter<Boolean>

  setcardstatus(){
    this.cardstatus.emit(false)
  }

  setstatus(){
    this.status.emit("Complete")
    this.cardstatus.emit(false)
  }
}
