import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acerca-mision',
  imports: [],
  templateUrl: './acerca-mision.html',
  styleUrl: './acerca-mision.css',
})
export class AcercaMision {
@Input() tituloMision!: string;
  
}
