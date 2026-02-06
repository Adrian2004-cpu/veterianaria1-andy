import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acerca-historia',
  imports: [],
  templateUrl: './acerca-historia.html',
  styleUrl: './acerca-historia.css',
})
export class AcercaHistoria {
  @Input() tituloHistoria!: string;
  @Input() historia!: string;  
  @Input() imagenA!: string;
}
