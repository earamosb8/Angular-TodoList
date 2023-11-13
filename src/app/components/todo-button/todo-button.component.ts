import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.css']
})
export class TodoButtonComponent {
  active: boolean = false;
  @Output() eventActive = new EventEmitter();


  activar(): void {
    this.active = !this.active;
    this.eventActive.emit(this.active);
  }


}
