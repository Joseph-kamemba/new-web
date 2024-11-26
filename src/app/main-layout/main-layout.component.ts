import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, RouterLinkActive, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
