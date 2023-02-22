import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomedecoratorsComponent } from './somedecorators.component';

describe('SomedecoratorsComponent', () => {
  let component: SomedecoratorsComponent;
  let fixture: ComponentFixture<SomedecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomedecoratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomedecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
