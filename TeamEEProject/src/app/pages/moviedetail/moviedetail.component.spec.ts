import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailComponent } from './moviedetail.component';

describe('MoviedetailComponent', () => {
  let component: MoviedetailComponent;
  let fixture: ComponentFixture<MoviedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
