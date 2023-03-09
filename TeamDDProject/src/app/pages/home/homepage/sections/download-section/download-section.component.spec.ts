import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSectionComponent } from './download-section.component';

describe('DownloadSectionComponent', () => {
  let component: DownloadSectionComponent;
  let fixture: ComponentFixture<DownloadSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
