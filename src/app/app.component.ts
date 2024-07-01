import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskformComponent } from "./taskform/taskform.component";
import { DetailComponent } from "./detail/detail.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, TaskformComponent, DetailComponent,CommonModule]
})
export class AppComponent {
  showform = false
  toggleform() {
    this.showform = !this.showform
  }
  tasklist=[
    {
      title:"Task title",
      description:"Task description",
      status:'Incomplete'
    },
    {
      title:"Task title",
      description:"Task description",
      status:'Incomplete'
    },
    {
      title:"Task title",
      description:"Task description",
      status:'Incomplete'
    },
    {
      title:"Task title",
      description:"Task description",
      status:'Incomplete'
    },
  ]
  title = 'Task Manager';
}
