import { Injectable } from '@angular/core';
import { TodoMachineComponent } from '../components/todo-machine/todo-machine.component';
import Todo  from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList : Todo[] = [
   /* { title: 'Buy groceries', completed: false },*/
  ]

  private todoListFiltered: Todo[] = [];

  private subtitle:string = '';


  constructor() { }

/*  public setSubtitle(msg:string) {
    this.subtitle = msg;
  }

  public getSubtitle(msg:string) {
    return this.subtitle;
  }*/

  public getTodoList() {
    let todos = localStorage.getItem('todos');
    if(todos){
      this.todoList = JSON.parse(todos);
    }
    return this.todoList;


  }

  public deleteTodo(indexTodo:number) {
      this.todoList.splice(indexTodo,1);
      localStorage.setItem('todos', JSON.stringify(this.todoList))
  }

  public editItem(indexTodo:number) {
    this.todoList[indexTodo].completed =!this.todoList[indexTodo].completed;
    localStorage.setItem('todos', JSON.stringify(this.todoList))
  }

  public addTodo(todo: Todo) {
    this.todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todoList))
  }

  public searchTodo(event: any):any {
    //console.log( event.target.value);
    //console.log("antes ", this.todoList);
    if(event.target.value){
      this.todoListFiltered = this.todoList.filter(x=>x.title === event.target.value.toString());
    /*  if(this.todoListFiltered.length > 0){
        console.log(this.todoListFiltered);
      }*/
     // console.log(this.todoListFiltered);
     // this.getTodoList();
    }


  }

}
