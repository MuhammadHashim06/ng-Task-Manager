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

  setActive=(task: any)=> {    
    this.active = task
    this.togglecard()
  }
  setstatus($event: any) {
    var state=$event.status=='Complete'?'Incomplete':'Complete' 
    console.log(state);
    this.service.updatetaskstatus(state,this.active.id)
    this.active=null
  }
  setValuestoedit=()=>{
    this.toggleform();
    this.togglecard();
  }
  toggleedtform(){
    this.showform=!this.showform
    this.active=null
  }
  toggleform() {
    this.showform = !this.showform
    // this.active=null
  }
  togglecard() {
    this.showcard = !this.showcard
  }
  addtask(item: any) {
    console.log(item.id);
    
    if(item.id){
      console.log("bhai update kr do");
      
      this.service.updatetask(item.id,item)
    }else{
      console.log("BHai ya mujhy add kr rha hain");
      
      this.service.addtask(item)
    }
    this.active=null
  }
  deltask=(id:number)=> {
    this.service.deletetask(id);
    this.active=null
    }
    updatetask(){
      this.service.updatetask(this.active,this.active.id)
    }
}
