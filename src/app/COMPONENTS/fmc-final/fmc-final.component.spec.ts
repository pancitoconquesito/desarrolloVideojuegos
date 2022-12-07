import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMCFINALComponent } from './fmc-final.component';

describe('FMCFINALComponent', () => {
  let component: FMCFINALComponent;
  let fixture: ComponentFixture<FMCFINALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FMCFINALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FMCFINALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
