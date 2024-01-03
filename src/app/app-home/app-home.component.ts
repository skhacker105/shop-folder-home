import { Component } from '@angular/core';
import { DashboardBoxComponent, PageLayoutComponent } from 'shop-folder-component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { CatalogLogoComponent, ContactLogoComponent, InventoryLogoComponent, LedgerLogoComponent, OrderLogoComponent, PurchaseLogoComponent, SalesLogoComponent, TodoLogoComponent, TransactionLogoComponent } from 'shop-folder-logo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterModule, PageLayoutComponent, DashboardBoxComponent, MatIconModule, MatRippleModule, ContactLogoComponent,
    CatalogLogoComponent, InventoryLogoComponent, LedgerLogoComponent, OrderLogoComponent, PurchaseLogoComponent,
    SalesLogoComponent, TodoLogoComponent, TransactionLogoComponent,
    MatBadgeModule],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent {
  allExpanded = false;
}
