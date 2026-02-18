import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  cerrarSesion(){
    console.log("Sesión cerrada");

    // 2. Aquí puedes limpiar los datos (ejemplo: borrar el nombre del usuario)
    localStorage.clear();

  }
  
}
