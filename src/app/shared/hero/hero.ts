import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  //los datos vacios que llenaremos en cada uso del componente
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() textoBoton!: string;
  @Input() imagen!: string;
  @Input() colorFondo!:string;
}
