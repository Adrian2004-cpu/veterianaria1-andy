import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [], 
  templateUrl: './galery.html',
  styleUrl: './galery.css'
})
export class Galery {
  @Input() imagenG1 = '';
  @Input() imagenG2 = '';
  @Input() imagenG3 = '';
  @Input() imagenG4 = '';
  @Input() imagenG5 = '';

  // 1 = Primera foto, 2 = Segunda foto, etc.
  slideActual: number = 1;

  siguiente() {
    if (this.slideActual < 5) {
      this.slideActual++;
    } else {
      this.slideActual = 1; 
    }
  }

  anterior() {
    if (this.slideActual > 1) {
      this.slideActual--;
    } else {
      this.slideActual = 5; 
    }
  }
}