import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-horarios',
  imports:[CommonModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent {
    currentYear = new Date().getFullYear();
  months: any[] = [];

  ngOnInit() {
    this.generateMonths();
  }

  generateMonths() {
    this.months = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(this.currentYear, i, 1);
      return {
        name: date.toLocaleString('es-ES', { month: 'long' }),
        days: Array.from({ length: new Date(this.currentYear, i + 1, 0).getDate() }, (_, k) => k + 1),
        firstDayIndex: new Date(this.currentYear, i, 1).getDay(),
        index: i
      };
    });
  }

  getEmptyDays(firstDayIndex: number): any[] {
    return Array(firstDayIndex > 0 ? firstDayIndex - 1 : 6).fill(0);
  }

  isToday(day: number, monthIndex: number): boolean {
    const today = new Date();
    return (
      day === today.getDate() &&
      monthIndex === today.getMonth() &&
      this.currentYear === today.getFullYear()
    );
  }

  isWeekend(day: number, monthIndex: number): boolean {
    const dayOfWeek = new Date(this.currentYear, monthIndex, day).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  changeYear(offset: number): void {
    this.currentYear += offset;
    this.generateMonths();
  }
}
