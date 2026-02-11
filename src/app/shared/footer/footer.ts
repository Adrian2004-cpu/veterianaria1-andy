import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anio: number = new Date().getFullYear();

  enlaces = [
    { texto: "Home", link: "home" },
    { texto: "Acerca", link: "acerca" },
    { texto: "Consultas", link: "consultas" },
    { texto: "Mascotas", link: "mascotas" },
    { texto: "Contacto", link: "contacto" },
    { texto: "Usuarios", link: "usuarios" },
    { texto: "Registro", link: "registro" },
  ];
}
