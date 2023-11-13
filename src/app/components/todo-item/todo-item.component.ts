import { Component ,Input, Output,EventEmitter} from '@angular/core';
import Todo from 'src/app/interfaces/todo';
import { TodoService } from'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoList: Todo[] = [];
  @Input() indexTodo: number = 0;
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() editItemEvent = new EventEmitter<number>();

  constructor(private todoService: TodoService) {

  }



  checkItem(indexTodo: number): void {
    this.todoService.editItem(indexTodo);
    //console.log(this.todoList);
   // this.editItemEvent.emit(indexTodo);
  }

  delete(indexTodo: number):void{
    this.todoService.deleteTodo(indexTodo);
   // this.deleteItemEvent.emit(indexTodo);
  }
 
}
