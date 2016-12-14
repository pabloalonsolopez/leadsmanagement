import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Params, Router } from "@angular/router"

import { ModalService } from "../core/modal/modal.service"
import { LeadsModule } from "./leads.module"
import { LeadEditComponent } from "./lead-edit.component"

import { Lead } from "./lead.model"
import { LeadsService } from "./leads.service"

@Component({
  selector: "lm-lead-detail",
  templateUrl: "./lead-detail.component.html"
})

export class LeadDetailComponent implements OnInit {

  lead: Lead
  error: any

  constructor(private route: ActivatedRoute, private router: Router, private modalService: ModalService, private leadsService: LeadsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.leadsService.getLead(params["id"]).subscribe(
          lead => this.lead = lead,
          error => this.error = error
        )
      }
    )
  }

  openEditLeadModal() {
    this.modalService.create(LeadsModule, LeadEditComponent, {
      lead: this.lead,
      ok: (lead: Lead) => {
        this.lead = lead
      }
    })
  }

  deleteLead(): void {
    this.leadsService.deleteLead(this.lead).subscribe(
      () => this.router.navigate(["/leads"]),
      error => this.error = error
    )
  }

}