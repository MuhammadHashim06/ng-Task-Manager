import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.scss'
})
export class TaskformComponent {


@Output()showform = new EventEmitter<Boolean>()


toggle() {
  this.showform.emit(false);
  console.log(this.showform);
  
}
setTask() {
}

}
