import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoitemComponent } from './todoitem.component';

describe('TodoitemComponent', () => {
  let component: TodoitemComponent;
  let fixture: ComponentFixture<TodoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
