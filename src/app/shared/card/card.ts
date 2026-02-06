import { Component } from '@angular/core';

// Definimos una interfaz simple para saber qué datos lleva cada tarjeta
interface Tarjeta {
  titulo: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  autor: string;
  fecha: string;
  avatar: string;
}

@Component({
  selector: 'app-card',
  standalone: true, // Asegúrate de que esto esté o que esté en el módulo
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  // Array con los datos de tus tarjetas
  tarjetas: Tarjeta[] = [
    {
      titulo: 'Consulta Médica',
      categoria: 'Servicio',
      descripcion: 'Atención primaria para tu mascota. Diagnóstico preciso y tratamiento oportuno.',
      imagen: '/images/consulta-medica.png',
      autor: 'Dr. House',
      fecha: '06 FEB 2026',
      avatar: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60'
    },
    {
      titulo: 'Estética y Bienestar',
      categoria: 'Servicio',
      descripcion: 'Servicios de peluquería y baño para que tu mascota luzca increíble.',
      imagen: '/images/estetica-canina-.jpg',
      autor: 'Jane Doe',
      fecha: '21 SEP 2025',
      avatar: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60'
    }
  ];
}