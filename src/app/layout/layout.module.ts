import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MobileMenuComponent } from './layout/header/mobile-menu/mobile-menu.component';
import { DesktopMenuComponent } from './layout/header/desktop-menu/desktop-menu.component';
import { MenuItemsComponent } from './layout/header/menu-items/menu-items.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    DesktopMenuComponent,
    MenuItemsComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  exports: [FooterComponent],
})
export class LayoutModule {}
