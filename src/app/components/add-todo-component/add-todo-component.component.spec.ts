import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponentComponent } from './add-todo-component.component';

describe('AddTodoComponentComponent', () => {
  let component: AddTodoComponentComponent;
  let fixture: ComponentFixture<AddTodoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoComponentComponent]
    });
    fixture = TestBed.createComponent(AddTodoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
