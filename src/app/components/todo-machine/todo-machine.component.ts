import { Component ,SimpleChanges, Input} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import Todo from 'src/app/interfaces/todo';
import { Routes, RouterModule } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { trigger,state,style,animate,transition } from '@angular/animations';




@Component({
  selector: 'app-todo-machine',
  templateUrl: './todo-machine.component.html',
  styleUrls: ['./todo-machine.component.css'],

})

export class TodoMachineComponent {
  /*  todoList : Todo[] = [
      { title: 'Buy groceries', completed: false },
      { title: 'Call mom', completed: true },
      { title: 'Call dad', completed: false },
      { title: 'Call brother', completed: false },
      { title: 'Call sister', completed: false },
    ]*/

    @Input() subtitulo:string = 'Add Todos';
    todoList : Todo[] =[];
    mostrar:boolean = false;


    constructor(private todoService: TodoService){
      this.todoList = this.todoService.getTodoList();
      console.log("aqui esta el servicio " + this.todoList);
    }

    activar(){
      this.mostrar =!this.mostrar;
    };

    buscarTodos(event: any){
        this.todoService.searchTodo(event);
    };

}
