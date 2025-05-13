import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actividad-card',
  standalone: true,
  templateUrl: './actividad-card.component.html',
  styleUrls: ['./actividad-card.component.css']
})
export class ActividadCardComponent {
  @Input() actividad!: { imagen: string; titulo: string; horario: string };
 @Output() seleccionada = new EventEmitter<{ imagen: string; titulo: string; horario: string }>();

onCardClick() {
  this.seleccionada.emit(this.actividad);
}
}