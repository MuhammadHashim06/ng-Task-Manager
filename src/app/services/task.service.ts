import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasklist = [
    {
      id: 1,
      title: "Task title 1",
      description: "Task description 1",
      status: 'Incomplete'
    },
    {
      id: 2,
      title: "Task title 2",
      description: "Task description 2",
      status: 'Complete'
    },
    {
      id: 3,
      title: "Task title 3",
      description: "Task description 3",
      status: 'Incomplete'
    },
    {
      id: 4,
      title: "Task title 4",
      description: "Task description 4",
      status: 'Incomplete'
    },
  ];
  


  gettask(){
    return this.tasklist;
  }
  addtask(item:any){    
    const newItem = {
      id: this.tasklist.length + 1,
      title: item.title,
      description: item.description,
      status: item.status
    };
    this.tasklist.push(newItem);
  }
  updatetaskstatus(status: string, id: number) {
    const taskToUpdate = this.tasklist.find(task => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.status = status;
    }
  }
  
  updatetask(id: number, updatedTask: any) {
    const index = this.tasklist.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasklist[index] = { ...this.tasklist[index], ...updatedTask };
    }
  }
  
  deletetask(id: number) {
    const index = this.tasklist.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasklist.splice(index, 1);
    }
  }
  
}
