import { Component } from '@angular/core';
import { DashboardBoxComponent, PageLayoutComponent } from 'shop-folder-component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CatalogLogoComponent, ContactLogoComponent, InventoryLogoComponent, LedgerLogoComponent, OrderLogoComponent, PurchaseLogoComponent, SalesLogoComponent, TodoLogoComponent, TransactionLogoComponent } from 'shop-folder-logo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageLayoutComponent, DashboardBoxComponent, MatIconModule, MatRippleModule, ContactLogoComponent, CatalogLogoComponent, InventoryLogoComponent, LedgerLogoComponent, OrderLogoComponent, PurchaseLogoComponent, SalesLogoComponent, TodoLogoComponent, TransactionLogoComponent],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent {

}
