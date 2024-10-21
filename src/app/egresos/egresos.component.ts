import { Component, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-egresos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, PercentPipe],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent {
  egresos: Egreso[]=[];
  @Input() ingresoTotal:number;

  constructor(private egresoServicio:EgresoServicio){}

  ngOnInit(){
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
