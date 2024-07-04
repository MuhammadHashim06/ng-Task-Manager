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

  @Input()setValuestoedit:any

  @Output()
  status = new EventEmitter<String>

  @Output()
  cardstatus = new EventEmitter<Boolean>

  setcardstatus(){
    this.cardstatus.emit(false)
  }

  setstatus(){
    this.status.emit(this.active)
    this.cardstatus.emit(false)
  }
}
