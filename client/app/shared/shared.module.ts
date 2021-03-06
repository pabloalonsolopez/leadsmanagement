import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { PhonePipe } from "../shared/pipes/phone.pipe"
import { ConfirmModalComponent } from "../shared/confirm-modal/confirm-modal.component"
import { IconComponent } from "./icon/icon.component"

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhonePipe,
    ConfirmModalComponent,
    IconComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PhonePipe,
    ConfirmModalComponent,
    IconComponent
  ]
})

export class SharedModule {}