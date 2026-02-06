import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  imports: [],
  templateUrl: './galery.html',
  styleUrl: './galery.css',
})
export class Galery {
@Input() imagenG1!: string;
@Input() imagenG2!: string;
@Input() imagenG3!: string;
@Input() imagenG4!: string;
@Input() imagenG5!: string;
}
