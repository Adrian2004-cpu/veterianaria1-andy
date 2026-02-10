import { Component, inject, signal } from '@angular/core';
import { MascotaService } from '../../services/mascota-service/mascota-service';
import { Pet } from '../../models/pets';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {
private mascotaServicio = inject(MascotaService);
mascotas = signal<Pet[]>([]);
//Metodo para que siempre esten los datos al recargar la pagina
ngOnInit(){
  this.mascotaServicio.getMascotas().subscribe(datos =>{
    this.mascotas.set(datos.data);
  })
}
}
