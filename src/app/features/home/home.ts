import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Servicios } from "../../shared/servicios/servicios";
import { Card } from "../../shared/card/card";
import { Service } from "../../shared/service/service";
import { Pacientes } from "../../shared/pacientes/pacientes";

@Component({
  selector: 'app-home',
  imports: [Hero, Servicios, Card, Service, Pacientes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
