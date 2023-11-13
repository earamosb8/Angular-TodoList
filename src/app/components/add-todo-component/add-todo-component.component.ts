import { Component,Output,EventEmitter } from '@angular/core';
import Todo from 'src/app/interfaces/todo';
import { FormsModule } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-todo-component',
  templateUrl: './add-todo-component.component.html',
  styleUrls: ['./add-todo-component.component.css']
})
export class AddTodoComponentComponent {

  @Output() todoIngresado: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() cancelarTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() componenteIniciado :EventEmitter<string>  = new EventEmitter<string>();

  todo:string = "";
  constructor(private todoService:TodoService) {

  }


  ngOnInit() {
    setTimeout(() => {
      this.componenteIniciado.emit("Add Todos");
    },0);
  };


  agregarTodo() {
    if(this.todo){
      let newTodo:Todo= {title: "",completed: false};
      newTodo= {title: this.todo,completed: false};
      this.todoService.addTodo(newTodo);
      this.todoIngresado.emit();
    }

  }
  cancelar() {
    this.cancelarTodo.emit();
  }
}
