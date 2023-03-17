import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDialogComponent } from './youtube-player.component';

describe('YoutubePlayerComponent', () => {
  let component: MovieDialogComponent;
  let fixture: ComponentFixture<MovieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
