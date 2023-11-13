import { Component ,Input,EventEmitter,Output } from '@angular/core';
import Todo from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoList: Todo[] = [];
  @Output() componenteIniciado :EventEmitter<string>  = new EventEmitter<string>();



  constructor(private todoService: TodoService) {

  };



  ngOnInit() {
    setTimeout(() => {
      this.componenteIniciado.emit('Show Todos');
    },0);
  };

/*

  deleteItem(indexTodo: number) {
    this.todoService.deleteTodo(indexTodo);
      //this.todoList.splice(indexTodo,1);
  }

  editItem(indexTodo: number) {
    this.todoService.editItem(indexTodo);
    console.log(this.todoList);
  }*/
}
