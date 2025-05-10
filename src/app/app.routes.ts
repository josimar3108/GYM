import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  {path: 'index', component: IndexComponent},
  { path: 'login', component: LoginComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
  
];