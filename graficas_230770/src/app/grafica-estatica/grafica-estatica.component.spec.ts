import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEstaticaComponent } from './grafica-estatica.component';

describe('GraficaEstaticaComponent', () => {
  let component: GraficaEstaticaComponent;
  let fixture: ComponentFixture<GraficaEstaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaEstaticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaEstaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
