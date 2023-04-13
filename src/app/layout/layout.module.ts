import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MobileMenuComponent } from './layout/header/mobile-menu/mobile-menu.component';
import { DesktopMenuComponent } from './layout/header/desktop-menu/desktop-menu.component';
import { MenuItemsComponent } from './layout/header/menu-items/menu-items.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    DesktopMenuComponent,
    MenuItemsComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, BsDropdownModule.forRoot()],
})
export class LayoutModule {}
