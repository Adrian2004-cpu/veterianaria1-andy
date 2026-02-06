import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acerca-vision',
  imports: [],
  templateUrl: './acerca-vision.html',
  styleUrl: './acerca-vision.css',
})
export class AcercaVision {
@Input() tituloVision!: string;
}
