import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectorComponent } from './injector.component';

describe('InjectorComponent', () => {
  let component: InjectorComponent;
  let fixture: ComponentFixture<InjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
