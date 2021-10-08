import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmcComponent } from './fmc.component';

describe('FmcComponent', () => {
  let component: FmcComponent;
  let fixture: ComponentFixture<FmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
