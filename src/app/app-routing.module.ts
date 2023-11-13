import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponentComponent } from './components/add-todo-component/add-todo-component.component';


const routes: Routes = [

  { path: 'second-component', component:  AddTodoComponentComponent} ,
  { path: 'first-component:' , component: TodoListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
