import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsubjectComponent } from './testsubject.component';

describe('TestsubjectComponent', () => {
  let component: TestsubjectComponent;
  let fixture: ComponentFixture<TestsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
