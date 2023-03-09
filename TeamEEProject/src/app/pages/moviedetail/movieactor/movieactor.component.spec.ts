import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieactorComponent } from './movieactor.component';

describe('MovieactorComponent', () => {
  let component: MovieactorComponent;
  let fixture: ComponentFixture<MovieactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
