import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorDetalleComponent } from './entrenador-detalle.component';

describe('EntrenadorDetalleComponent', () => {
  let component: EntrenadorDetalleComponent;
  let fixture: ComponentFixture<EntrenadorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenadorDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenadorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
