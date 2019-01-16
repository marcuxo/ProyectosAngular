import { Component } from '@angular/core';
import { Datos } from './modelo/datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datosArray: Datos[] = [
    {id: 1, name: "Marco", edad: 33, pais: "Chile"},
    {id: 2, name: "Dixon", edad: 35, pais: "Venezuela"},
    {id: 3, name: "Edgar", edad: 23, pais: "Peru"},
    {id: 4, name: "Chamaco", edad: 45, pais: "U.S.A"}
  ];

  seleccionarDato: Datos = new Datos();

  addOrEdit(){
    if(this.seleccionarDato.id === 0){
      this.seleccionarDato.id = this.datosArray.length +1;
      this.datosArray.push(this.seleccionarDato);
    }
    this.seleccionarDato = new Datos();
  }

  eliminaDato(){
    if(confirm('Estas seguro de eliminarlo')){
      this.datosArray = this.datosArray.filter(x => x != this.seleccionarDato);
      this.seleccionarDato = new Datos();
    }
  }

  SeleccionEdit(dato: Datos){
    this.seleccionarDato = dato;
  }
}
