import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntrenadoresService,Entrenador } from '../../services/entrenadores.service';

@Component({
  standalone:true,
  selector: 'app-servicios',
  imports: [RouterOutlet,HttpClientModule,CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})

export class ServiciosComponent {
    title="GYM-MASTER";
    entrenadores: Entrenador[] = [];

    plan1: string = 'img2.jpg'; 
    plan2: string = 'boxeo.jpg'; 
    plan3: string = 'fondo.jpg'; 



  constructor(private entrenadoresService: EntrenadoresService) {}

  ngOnInit(): void {
    this.entrenadoresService.getProducts().subscribe(data => {
      this.entrenadores = data;
    });
  }
}
