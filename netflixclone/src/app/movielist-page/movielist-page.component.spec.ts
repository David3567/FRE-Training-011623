import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistPageComponent } from './movielist-page.component';

describe('MovielistPageComponent', () => {
  let component: MovielistPageComponent;
  let fixture: ComponentFixture<MovielistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielistPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
