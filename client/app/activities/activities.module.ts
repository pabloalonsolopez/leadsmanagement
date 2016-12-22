import { NgModule } from "@angular/core"

import { SharedModule } from "../shared/shared.module"

import { ActivitiesListComponent } from "./activities-list.component"
import { ActivityFormComponent } from "./activity-form.component"

import { ActivitiesService } from "./activities.service"

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ActivitiesListComponent,
    ActivityFormComponent
  ],
  exports: [
    ActivitiesListComponent,
    ActivityFormComponent
  ],
  providers: [
    ActivitiesService
  ]
})

export class ActivitiesModule {}