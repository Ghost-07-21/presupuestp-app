import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, PercentPipe],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent implements OnInit {
  ingresos:Ingreso[]=[];

  constructor(private ingresoServicio:IngresoServicio){}

  ngOnInit(){
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.ingresoServicio.eliminar(ingreso)
  }
}
