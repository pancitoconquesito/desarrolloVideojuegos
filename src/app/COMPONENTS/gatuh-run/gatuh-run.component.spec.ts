import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatuhRunComponent } from './gatuh-run.component';

describe('GatuhRunComponent', () => {
  let component: GatuhRunComponent;
  let fixture: ComponentFixture<GatuhRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatuhRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatuhRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
