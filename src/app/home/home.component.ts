import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks:Array<any>=[];
  task:any="";
  isEdit:boolean = false;
  indx:Number= 0;
  addTodo = ()=>{
    if(this.isEdit){
     this.tasks= this.tasks.map((curr,index)=>{
        if(index===this.indx){
          curr = this.task;
        }
        return curr;
      })
      this.task="";
      this.isEdit = false;
    }else{      
      this.tasks.push(this.task);
      this.task = ""
    }
  }
  getValue(e:any){
    this.task=e.target.value
  }
  deleteTodo(ind:any){
    this.tasks=this.tasks.filter((curr,index)=>{
      return index!==ind
    });    
  }
  editTodo(ind:any){
    console.log(ind);
    this.task = this.tasks[ind];
    this.isEdit = true;
    this.indx=ind;
  }
  deleteAllTodo(){
    this.tasks=[];
  }
}
