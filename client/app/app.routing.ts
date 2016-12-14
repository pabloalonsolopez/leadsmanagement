import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "leads",
    loadChildren: "./+leads/leads.module#LeadsModule"
  }
]

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)