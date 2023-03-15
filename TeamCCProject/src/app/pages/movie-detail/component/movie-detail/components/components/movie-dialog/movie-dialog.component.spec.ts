import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDialogComponent } from './movie-dialog.component';

describe('MovieDialogComponent', () => {
  let component: MovieDialogComponent;
  let fixture: ComponentFixture<MovieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});