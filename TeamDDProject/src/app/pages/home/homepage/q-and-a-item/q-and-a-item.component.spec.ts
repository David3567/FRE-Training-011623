import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAndAItemComponent } from './q-and-a-item.component';

describe('QAndAItemComponent', () => {
  let component: QAndAItemComponent;
  let fixture: ComponentFixture<QAndAItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QAndAItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QAndAItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
