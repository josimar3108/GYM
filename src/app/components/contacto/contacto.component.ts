import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  equipo = [
    {
      nombre: 'Gustavo Andrés Mojica Lamas',
      imagen: 'Gustavo.jpg',
      rol: 'Desarrollador'
    },
    {
      nombre: 'Josimar Maldonado Rosales',
      imagen: 'Josimar.jpg',
      rol: 'Desarrollador'
    },
    {
      nombre: 'Ian Alejandro Hernández Aranda',
      imagen: 'Ian.jpg',
      rol: 'Desarrollador'
    }
  ];
}
