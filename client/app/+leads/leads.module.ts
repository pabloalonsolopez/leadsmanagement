import { NgModule } from "@angular/core"

import { SharedModule } from "../shared/shared.module"

import { RoutingModule } from "./leads.routing"

import { ActivitiesModule } from "../activities/activities.module"

import { LeadsComponent } from "./leads.component"
import { LeadsListComponent } from "./leads-list.component"
import { LeadNewComponent } from "./lead-new.component"
import { LeadDetailComponent } from "./lead-detail.component"
import { LeadEditComponent } from "./lead-edit.component"
import { LeadFormComponent } from "./lead-form.component"
import { LeadActivityNewComponent } from "./lead-activity-new.component"

import { LeadsService } from "./leads.service"

@NgModule({
  imports: [
    SharedModule,
    RoutingModule,
    ActivitiesModule
  ],
  declarations: [
    LeadsComponent,
    LeadsListComponent,
    LeadNewComponent,
    LeadDetailComponent,
    LeadEditComponent,
    LeadFormComponent,
    LeadActivityNewComponent
  ],
  providers: [
    LeadsService
  ]
})

export class LeadsModule {}