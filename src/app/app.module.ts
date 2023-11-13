import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoMachineComponent } from './components/todo-machine/todo-machine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoButtonComponent } from './components/todo-button/todo-button.component';
import { AddTodoComponentComponent } from './components/add-todo-component/add-todo-component.component';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    TodoMachineComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoButtonComponent,
    AddTodoComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [TodoService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
