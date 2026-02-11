import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  @Input() titulo!: string;
  @Input() tituloNegrita!: string;      // Lo usaremos para el texto en color azul
  @Input() subtitulo!: string;    // Frase corta e impactante
  @Input() descripcion!: string;  // Párrafo explicativo más largo
  @Input() imagen!: string;       // Ruta de la imagen
  @Input() botonTexto!: string;
}