import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'

import { RoutingModule } from "./core.routing"

import { ModalModule } from "./modal/modal.module"

import { HomeComponent } from "./home/home.component"

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
    ModalModule
  ]
})

export class CoreModule {}