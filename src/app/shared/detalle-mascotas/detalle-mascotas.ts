import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-mascotas',
  imports: [],
  templateUrl: './detalle-mascotas.html',
  styleUrl: './detalle-mascotas.css',
})
//Compnente hijo
export class DetalleMascotas {
  //Recibe un parametro desde el componente padre - CONSULTAS
  @Input() mascota?: Mascota;

  //El componente hijo DETALLE envia an este caso un evanto
  @Output() notificacion = new EventEmitter<string>();

  //Metodo que se va  a activar cuando haga clic en el boton del compnente hijo
  avisarIngreso():void {
    if (this.mascota){
      this.notificacion.emit(
        `La mascota ${this.mascota.nombre} a sido llamado a consulta`,
      );
    }
  }
}
