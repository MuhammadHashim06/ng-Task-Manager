import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

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


  gettask(){
    return this.tasklist;
  }
  addtask(item:any){
    this.tasklist.push(item)
  }

}
