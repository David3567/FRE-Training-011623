import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieposterComponent } from './movieposter.component';

describe('MovieposterComponent', () => {
  let component: MovieposterComponent;
  let fixture: ComponentFixture<MovieposterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieposterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
