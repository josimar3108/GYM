import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Define la interfaz User (asegúrate de tenerla en tu proyecto)
interface User {
  username: string;
  password: string;
  fullName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registeredUsers: User[] = [
    { username: 'josimar', password: '123', fullName: 'Josimar Maldonado Rosales' },
    { username: 'ian', password: '456', fullName: 'Ian Hernandez Aranada' },
    { username: 'gustavo', password: '789', fullName: 'Gustavo Mojica Lamas' }
  ];

  private currentUser: User | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): User | null {
    // Especifica el tipo del parámetro 'u' como User
    const user = this.registeredUsers.find((u: User) => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const user = localStorage.getItem('currentUser');
      this.currentUser = user ? JSON.parse(user) : null;
    }
    return this.currentUser;
  }
}