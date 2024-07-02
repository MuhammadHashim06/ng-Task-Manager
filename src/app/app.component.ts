import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskformComponent } from "./taskform/taskform.component";
import { DetailComponent } from "./detail/detail.component";
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';
import { TaskcardComponent } from "./taskcard/taskcard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TaskformComponent, DetailComponent, CommonModule, TaskcardComponent]
})
export class AppComponent {
setActive(task:any,index:number) {
  console.log("Bhai Run hogia hun");
  console.log(task,index);
  this.active=task
  this.togglecard()
}
setstatus($event: String) {
console.log($event);

}
  constructor ( private service: TaskService ){

  }
  title = 'Task Manager';
  tasklist= this.service.tasklist;
  showform = false
  showcard = false;

  toggleform() {
    this.showform = !this.showform
  }
  togglecard(){
    console.log("toogle wala function");
    this.showcard=!this.showcard
  }
  addtask(item:any){
    console.log(item);
    this.service.addtask(item)
  }

active?:any
  

  
}
