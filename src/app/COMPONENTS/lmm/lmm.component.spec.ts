import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmmComponent } from './lmm.component';

describe('LmmComponent', () => {
  let component: LmmComponent;
  let fixture: ComponentFixture<LmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
