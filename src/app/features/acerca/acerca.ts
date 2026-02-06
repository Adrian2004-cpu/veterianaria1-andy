import { Component, Input } from '@angular/core';
import { AcercaHistoria } from "../../shared/acerca-historia/acerca-historia";
import { AcercaMision } from "../../shared/acerca-mision/acerca-mision";
import { AcercaVision } from "../../shared/acerca-vision/acerca-vision";
import { EquipoDeTrabajo } from "../../shared/equipo-de-trabajo/equipo-de-trabajo";


@Component({
  selector: 'app-acerca',
  imports: [AcercaHistoria, AcercaMision, AcercaVision, EquipoDeTrabajo, ],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

}
