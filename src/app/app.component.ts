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
  title = 'Task Manager';
  tasklist = this.service.tasklist;
  showform = false
  showcard = false;
  active?: any

  constructor(private service: TaskService) {

  }

  setActive=(task: any, index: number)=> {
    console.log("BHai Card active karo");
    this.active = task
    this.togglecard()
  }
  setstatus($event: any) {
    var state=$event=='Complete'?'Incomplete':'Complete' 
    console.log(state);
       
    this.service.updatetaskstatus(state,this.active.id)
  }
  toggleform() {
    this.showform = !this.showform
  }
  togglecard() {
    this.showcard = !this.showcard
  }
  addtask(item: any) {
    this.service.addtask(item)
  }
  deltask=(id:number)=> {
    this.service.deletetask(id);
    }
}
