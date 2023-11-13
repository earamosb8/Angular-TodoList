import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonComponent } from './todo-button.component';

describe('TodoButtonComponent', () => {
  let component: TodoButtonComponent;
  let fixture: ComponentFixture<TodoButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoButtonComponent]
    });
    fixture = TestBed.createComponent(TodoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
