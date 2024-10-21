import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

  @Input() presupuestoTotal: number;
  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;
  @Input() porcentajeTotal: number;

}
