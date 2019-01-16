import {Component} from '@angular/core';
import { Datos } from '../modelo/datos';

@Component({
    selector: 'hola-mundo',
    templateUrl: './primer.componente.html',
    styleUrls: ['./primer.componente.css']
})


export class holamundo {
    title = 'Bienvenido a angular 6';
}