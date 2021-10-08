import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurucuComponent } from './purucu.component';

describe('PurucuComponent', () => {
  let component: PurucuComponent;
  let fixture: ComponentFixture<PurucuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurucuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurucuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
