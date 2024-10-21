import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./formulario/formulario.component";
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { IngresosComponent } from "./ingresos/ingresos.component";
import { Egreso } from './egresos/egreso.model';
import { Ingreso } from './ingresos/ingreso.model';
import { EgresosComponent } from "./egresos/egresos.component";
import { IngresoServicio } from './ingresos/ingreso.servicio';
import { EgresoServicio } from './egresos/egreso.servicio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, CabeceroComponent, IngresosComponent, EgresosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private ingresoServicio:IngresoServicio,
              private egresoServicio:EgresoServicio){
                this.ingresos = ingresoServicio.ingresos;
                this.egresos = egresoServicio.egresos;
    }

    getIngresoTotal(){
      let ingresoTotal: number=0;
      this.ingresos.forEach(ingreso =>{
        ingresoTotal += ingreso.valor;
      }
    );
    return ingresoTotal;
    }

    getEgresoTotal(){
      let egresoTotal: number=0;
      this.egresos.forEach(egreso =>{
        egresoTotal += egreso.valor;
      }
    );
    return egresoTotal;
    }

    getPorcentajeTotal(){
      return this.getEgresoTotal()/this.getIngresoTotal();
    }

    getPresupuestoTotal(){
      return this.getIngresoTotal()-this.getEgresoTotal();
    }
}
