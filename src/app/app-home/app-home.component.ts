import { Component } from '@angular/core';
import { DashboardBoxComponent, PageLayoutComponent } from 'shop-folder-component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { CatalogLogoComponent, ContactLogoComponent, InventoryLogoComponent, LedgerLogoComponent, LoadingLogoComponent, OrderLogoComponent, PackingLogoComponent, ProgressLogoComponent, PurchaseLogoComponent, RawMaterialLogoComponent, ReturnLogoComponent, RupeeLogoComponent, SalesLogoComponent, ShippingLogoComponent, TodoLogoComponent, TransactionLogoComponent, VendorLogoComponent, WasteLogoComponent, ReceiptLogoComponent, OnTheWayLogoComponent, WorkingLogoComponent, GroupLogoComponent, ReadyLogoComponent, CalendarLogoComponent, SignInLogoComponent, SignOutLogoComponent, AdjustLogoComponent, TodoBacklogLogoComponent } from 'shop-folder-logo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterModule, ActionComponent, PageLayoutComponent, DashboardBoxComponent, MatIconModule, MatRippleModule, ContactLogoComponent,
    CatalogLogoComponent, InventoryLogoComponent, AdjustLogoComponent, LedgerLogoComponent, OrderLogoComponent, PackingLogoComponent, PurchaseLogoComponent,
    SalesLogoComponent, TodoLogoComponent, TransactionLogoComponent, RawMaterialLogoComponent, ProgressLogoComponent, RupeeLogoComponent, WasteLogoComponent,
    VendorLogoComponent, ShippingLogoComponent, LoadingLogoComponent,ReturnLogoComponent, ReceiptLogoComponent, OnTheWayLogoComponent, WorkingLogoComponent,
    GroupLogoComponent, ReadyLogoComponent, CalendarLogoComponent, SignInLogoComponent, SignOutLogoComponent,
    MatBadgeModule, TodoBacklogLogoComponent],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent {
  allExpanded = false;
}
