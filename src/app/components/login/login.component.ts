import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showWelcomeMessage: boolean = false;
  welcomeName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit()
  {
    const user = this.authService.login(this.username, this.password);

    if (user)
    {
      this.welcomeName = user.fullName;
      this.showWelcomeMessage = true;
      this.errorMessage = '';

      setTimeout(() => {
        this.showWelcomeMessage = false;

        // Redirige a /index y recarga la página
        this.router.navigateByUrl('/index').then(() => {
          window.location.reload();
        });
      }, 3000);
    }
    else
    {
      this.errorMessage = 'Usuario o contraseña incorrectos';
      this.showWelcomeMessage = false;
    }
  }

  closeWelcomeMessage()
  {
    this.showWelcomeMessage = false;

    // Redirige a /index y recarga la página
    this.router.navigateByUrl('/index').then(() => {
      //Recargar y redirigir al home para que se actualice el nav y mostrar el nombre del admin
      window.location.reload();
    });
  }
}