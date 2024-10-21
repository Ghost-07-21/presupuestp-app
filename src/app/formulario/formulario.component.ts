import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoServicio } from '../ingresos/ingreso.servicio';
import { EgresoServicio } from '../egresos/egreso.servicio';
import { Ingreso } from '../ingresos/ingreso.model';
import { Egreso } from '../egresos/egreso.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipo:string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio: IngresoServicio,
              private egresoServicio: EgresoServicio){}

  ngOnInit(){

  }

  tipoOperacion(evento: Event){
    //tipoOperacion(evento){
    const target = evento.target as HTMLSelectElement;
    this.tipo = target.value;
    //this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo == "ingresoOperacion")
      this.ingresoServicio.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput));
    else
    this.egresoServicio.egresos.push(
      new Egreso(this.descripcionInput, this.valorInput));
  }
}
