import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { LeadsComponent } from "./leads.component"
import { LeadsListComponent } from "./leads-list.component"
import { LeadDetailComponent } from "./lead-detail.component"

const routes: Routes = [
  {
    path: "",
    component: LeadsComponent,
    children: [
      {
        path: "",
        component: LeadsListComponent
      },
      {
        path: ":id",
        component: LeadDetailComponent
      }
    ]
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)