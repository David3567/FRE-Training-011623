import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieitemComponent } from './movieitem.component';

describe('MovieitemComponent', () => {
  let component: MovieitemComponent;
  let fixture: ComponentFixture<MovieitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
