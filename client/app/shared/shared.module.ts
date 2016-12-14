import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { FPipe } from "./f/f.pipe"
import { IconComponent } from "./icon/icon.component"

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconComponent,
    FPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    IconComponent,
    FPipe
  ]
})

export class SharedModule {}