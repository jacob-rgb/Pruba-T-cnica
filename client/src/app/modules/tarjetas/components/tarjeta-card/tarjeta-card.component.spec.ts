import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCardComponent } from './tarjeta-card.component';

describe('TarjetaCardComponent', () => {
  let component: TarjetaCardComponent;
  let fixture: ComponentFixture<TarjetaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
