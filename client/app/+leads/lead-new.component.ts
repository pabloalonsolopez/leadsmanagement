import { Component, OnInit } from "@angular/core"

import { Modal } from "../core/modal/modal.module"

import { Lead } from "./lead.model"
import { LeadsService } from "./leads.service"

@Component({
  selector: "lm-lead-new",
  templateUrl: "./lead-new.component.html",
  providers: [
    LeadsService
  ]
})

@Modal()
export class LeadNewComponent implements OnInit {

  closeModal: Function
  destroy: Function
  ok: Function

  lead: Lead
  error: any

  constructor(private leadsService: LeadsService) {}

  ngOnInit(): void {
    this.lead = new Lead()
  }

  createLead(lead: Lead): void {
    this.lead = lead
    delete this.lead._id
    this.leadsService.createLead(this.lead).subscribe(
      lead => {
        this.closeModal()
        this.destroy()
        this.ok(lead)
      },
      error => this.error = error
    )
  }

  cancel(): void {
    this.closeModal()
    this.destroy()
  }

}