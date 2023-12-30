import { Component } from '@angular/core';
import { PageLayoutComponent } from 'shop-folder-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent {

}
