import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.scss'
})
export class TaskformComponent {
  @Input() detail?: any;
  @Output() showform: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() taskitem: EventEmitter<any> = new EventEmitter<any>();

  title: string = '';
  description: string = '';

  constructor() {}

  ngOnInit() {
    // Initialize title and description if detail is provided
    if (this.detail) {
      this.title = this.detail.title || '';
      this.description = this.detail.description || '';
    }
  }

  toggle() {
    console.log(this.title, this.description);
    this.showform.emit(false);
  }
saveTask(){
  console.log({
    id:this.detail.id,
    title: this.title,
    description: this.description,
    status: this.detail.status
});
  
  this.taskitem.emit({
    id:this.detail.id,
    title: this.title,
    description: this.description,
    status: this.detail.status
});
this.showform.emit(false);
}
  setTask() {
    this.taskitem.emit({
      title: this.title,
      description: this.description,
      status: "Incomplete"
  });
    this.showform.emit(false);
  }
}
