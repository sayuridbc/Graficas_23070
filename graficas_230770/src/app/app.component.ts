import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraficaEstaticaComponent } from "./grafica-estatica/grafica-estatica.component";
import { GraficaApiladaComponent } from "./grafica-apilada/grafica-apilada.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GraficaEstaticaComponent, GraficaApiladaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graficas_230770';
}
