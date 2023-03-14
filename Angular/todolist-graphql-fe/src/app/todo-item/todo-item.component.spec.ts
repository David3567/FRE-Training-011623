import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

@Component({
  selector: 'parent-component',
  template: `<app-todo-item [item]="todo"></app-todo-item>`,
})
class ParentComponent {
  todo = {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  };
}

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  let itemcomponent: TodoItemComponent;
  let parentfixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent, ParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    parentfixture = TestBed.createComponent(ParentComponent);
    itemcomponent = parentfixture.debugElement.children[0].componentInstance;
    parentfixture.detectChanges();
  });

  it('should get data from the parent', () => {
    const todo = {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    };

    expect(itemcomponent.todo).toEqual(todo);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
