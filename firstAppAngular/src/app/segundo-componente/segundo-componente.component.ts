import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {
  title: string = 'Este es el titulo';

  lista = ['menu 1', 'menu 2', 'menu 3', 'menu 4'];
  constructor() { }

  ngOnInit() {
  }

}
