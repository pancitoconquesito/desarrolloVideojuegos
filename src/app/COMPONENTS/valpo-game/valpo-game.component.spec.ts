import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValpoGameComponent } from './valpo-game.component';

describe('ValpoGameComponent', () => {
  let component: ValpoGameComponent;
  let fixture: ComponentFixture<ValpoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValpoGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValpoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
