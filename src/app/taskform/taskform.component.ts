import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.scss'
})
export class TaskformComponent {


  @Output() showform = new EventEmitter<Boolean>()

  @Output() taskitem = new EventEmitter()

  title = '';
  description = '';
  toggle() {
    this.showform.emit(false);
  }
  setTask() {
    this.taskitem.emit({
      'title': this.title,
      'description': this.description,
      'status': "Incomplete"
    })
    this.showform.emit(false);
  }

}
