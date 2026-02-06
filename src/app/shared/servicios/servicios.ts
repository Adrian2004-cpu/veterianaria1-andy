import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  subtitulo: String = "Cuidamos a los que mas quieres con servicios de calidad"
  //Variable servicioSeleccionafo que vontenga "ninguno"
  servicioSeleccionado: String = " Ninguno ";


  servicios = [
    {
      id: 1,
      nombre: "Consulta General",
      descripcion: "Evaluacion completa de tu mascota",
      imagen: "https://selecciones.com.mx/wp-content/uploads/2019/08/consultas-en-el-veterinario.webp",
      activo: true
    },
    {
      id: 2,
      nombre: "Cirugia",
      descripcion: "Estelirzacion de tu mascota",
      imagen: "https://www.clinicaveterinariamh.com/wp-content/uploads/2019/11/2931654-1024x683.jpg",
      activo: true
    },
    {
      id: 3,
      nombre: "Estetica",
      descripcion: "El cuidado de la imagen de tu mascota es primordial",
      imagen: "https://www.paxinasgalegas.es/blog/animales-y-mascotas/7-tecnicas-de-estetica-canina-que-quizas-no-conozcas-img79-n1t0.jpg",
      activo: false
    },
  ];

  //Variable serviciosFiltrados para la busqueda
  serviciosFiltrados = this.servicios;

  //Funcios para 
  seleccionar(nombre: String) {
    this.servicioSeleccionado = nombre;
  }


//Funcion para la Busqueda
busqueda(event: Event){
  const valor = (event?.target as HTMLInputElement).value;
  this.subtitulo = `Resultados para: ${valor}`;
  this.serviciosFiltrados = this.servicios.filter(s =>
    s.nombre.toLowerCase().includes(valor.toLocaleLowerCase())
  )
}
}