import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Entrenador, EntrenadoresService } from '../../services/entrenadores.service';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe';


@Component({
  standalone: true,
  selector: 'app-servicios',
  imports: [
    MatToolbarModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    RouterModule,
    SafePipe
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})

export class ServiciosComponent {
  title = "GYM-MASTER";
  entrenadoresFiltrados: Entrenador[] = [];
  busqueda: string = '';
  entrenadores: Entrenador[] = [];

  plan1: string = 'img2.jpg';
  plan2: string = 'boxeo.jpg';
  plan3: string = 'fondo.jpg';

    planes = [
  {
    nombre: 'Plan Básico',
    imagen: this.plan1,
    caracteristicas: ['', 'Área de cardio', 'Horarios libres'],
    precio: '$399/mes'
  },
  {
    nombre: 'Plan Intermedio',
    imagen: this.plan2,
    caracteristicas: ['Pesas y cardio', 'Sesiones con nutriólogo', 'Clases de boxeo'],
    precio: '$599/mes'
  },
  {
    nombre: 'Plan Premium',
    imagen: this.plan3,
    caracteristicas: ['Todo incluido del plan intermedio', 'Clases personalizadas', 'Acceso a spa y masajes'],
    precio: '$899/mes'
  }
];



  constructor(private entrenadoresService: EntrenadoresService) {}

  ngOnInit(): void {
  this.entrenadoresService.getProducts().subscribe((data: Entrenador[]) => {
    this.entrenadores = data.map((ent, idx) => ({ ...ent, id: ent.id ?? idx + 1 }));
    this.entrenadoresFiltrados = this.entrenadores;
  });
}

  buscar(): void {
    const termino = this.busqueda.trim().toLowerCase();
    this.entrenadoresFiltrados = this.entrenadores.filter(ent =>
      ent.nombre.toLowerCase().includes(termino) ||
      ent.especialidad.toLowerCase().includes(termino) ||
      ent.descripcion.toLowerCase().includes(termino)
    );
  }

selectedEntrenadorId: number | null = null;

seleccionarEntrenador(id: number) {
  this.selectedEntrenadorId = id;
}

}
