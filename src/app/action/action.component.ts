import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Params, RouterModule } from '@angular/router';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatRippleModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent {
  @Input() icon: string | undefined;
  @Input() text: string = '';
  @Input() route: string = '';
  @Input() routes: string[] = [];
  @Input() queryParams: Params | undefined;
  @Input() matRippleColor = ''
  @Input() disabled = false;
}
