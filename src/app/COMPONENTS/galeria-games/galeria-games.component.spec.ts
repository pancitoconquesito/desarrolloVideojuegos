import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaGamesComponent } from './galeria-games.component';

describe('GaleriaGamesComponent', () => {
  let component: GaleriaGamesComponent;
  let fixture: ComponentFixture<GaleriaGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
