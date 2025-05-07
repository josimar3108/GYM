import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavComponent,HeaderComponent,FooterComponent, LoginComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
