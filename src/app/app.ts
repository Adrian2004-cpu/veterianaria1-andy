import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./features/home/home";
import { NavBar } from "./shared/nav-bar/nav-bar";
import { Hero } from "./shared/hero/hero";
import { initFlowbite } from 'flowbite';
import { Card } from "./shared/card/card";
import { Footer } from "./shared/footer/footer";
import { Service } from "./shared/service/service";
import { Servicios } from "./shared/servicios/servicios";

@Component({
  selector: 'app-root',
  imports: [Home, NavBar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  ngOnInit(): void {    
      initFlowbite    
  }  
}
