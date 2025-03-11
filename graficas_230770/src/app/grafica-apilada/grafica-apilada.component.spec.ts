import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaApiladaComponent } from './grafica-apilada.component';

describe('GraficaApiladaComponent', () => {
  let component: GraficaApiladaComponent;
  let fixture: ComponentFixture<GraficaApiladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaApiladaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaApiladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
