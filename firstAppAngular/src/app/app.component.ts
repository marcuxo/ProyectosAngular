import { Component } from '@angular/core';
import { Datos } from './modelo/datos';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datosArray: Datos[] = [
    {id: 1, name: "Marco", edad: 33, pais: "Chile"},
    {id: 1, name: "Dixon", edad: 35, pais: "Venezuela"},
    {id: 1, name: "Edgar", edad: 23, pais: "Peru"},
    {id: 1, name: "Chamaco", edad: 45, pais: "U.S.A"}
  ]
}
