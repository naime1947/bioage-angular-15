import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component';
import { ActionsRoutingModule } from './actions-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ThreeBoxComponent } from './component/three-box/three-box.component';
import { SeeReferenceComponent } from './component/see-reference/see-reference.component';

@NgModule({
  declarations: [ActionsComponent, ThreeBoxComponent, SeeReferenceComponent],
  imports: [CommonModule, ActionsRoutingModule, SharedModule],
})
export class ActionsModule {}
