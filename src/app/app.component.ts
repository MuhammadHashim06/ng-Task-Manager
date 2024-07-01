import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskformComponent } from "./taskform/taskform.component";
import { DetailComponent } from "./detail/detail.component";
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, TaskformComponent, DetailComponent,CommonModule]
})
export class AppComponent {
  constructor ( private service: TaskService ){

  }
  showform = false
  toggleform() {
    this.showform = !this.showform
  }
  addtask(item:any){
    console.log("Add Item wala function");
    
    console.log(item);
    this.service.addtask(item)
  }

  
  tasklist= this.service.tasklist;
  title = 'Task Manager';
}
