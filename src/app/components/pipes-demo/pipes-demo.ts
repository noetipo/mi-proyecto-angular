import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, PercentPipe} from '@angular/common';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    DatePipe,
    CurrencyPipe,
    PercentPipe
  ],
  standalone: true,
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.scss'
})
export class PipesDemo {
  texto = 'hola mundo desde angular';
  fecha = new Date();
  precio = 1234.56;
  porcentaje = 0.25;
  objeto = { nombre: 'Juan', edad: 30, ciudad: 'Lima' };
}
