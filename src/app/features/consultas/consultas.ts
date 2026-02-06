import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DetalleMascotas } from "../../shared/detalle-mascotas/detalle-mascotas";
import { Galery } from "../../shared/galery/galery";

@Component({
  selector: 'app-consultas',
  imports: [DetalleMascotas, Galery],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {
  mascotas = [
    { id: 1, nombre: "Ramon", especie: "Perro", historial: "Vacunas al dia" },
    { id: 2, nombre: "Lucky", especie: "Gato", historial: "Requiere desparacitación" },
    { id: 3, nombre: "Valentina", especie: "Conejo", historial: "Requiere rehabilitacion" },
  ];

  mascotaSeleccionada: Mascota | null = null;

  mensajeActivo: string = "";
  verDetalles(mascota: Mascota) {
    this.mascotaSeleccionada = mascota;
  }

  //Recibeun mensaje del componente hijo
  //Gestiona el evento enviando desde el componente hijo
  procesarAviso(mensaje: string) {
    this.mensajeActivo = mensaje;
  }

}
