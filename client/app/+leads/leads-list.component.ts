import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

import { ModalService } from "../core/modal/modal.service"
import { LeadsModule } from "./leads.module"
import { LeadNewComponent } from "./lead-new.component"

import { Lead } from "./lead.model"
import { LeadsService } from "./leads.service"

@Component({
  selector: "lm-leads-list",
  templateUrl: "./leads-list.component.html"
})

export class LeadsListComponent implements OnInit {

  leads: Lead[]
  error: any

  constructor(private router: Router, private modalService: ModalService, private leadsService: LeadsService) {}

  ngOnInit(): void {
    this.leadsService.getLeads()
      .subscribe(
        leads => this.leads = leads,
        error => this.error = error
      )
  }

  openCreateLeadModal() {
    this.modalService.create(LeadsModule, LeadNewComponent, {
      ok: (lead: Lead) => {
        this.router.navigate(["/leads", lead._id])
      }
    })
  }

}