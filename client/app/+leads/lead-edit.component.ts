import { Component, Input } from "@angular/core"

import { Modal } from "../core/modal/modal.module"

import { Lead } from "./lead.model"
import { LeadsService } from "./leads.service"

@Component({
  selector: "lm-lead-edit",
  templateUrl: "./lead-edit.component.html",
  providers: [
    LeadsService
  ]
})

@Modal()
export class LeadEditComponent {

  closeModal: Function
  destroy: Function
  ok: Function

  @Input() lead: Lead
  error: any

  constructor(private leadsService: LeadsService) {}

  updateLead(lead: Lead): void {
    this.lead = lead
    this.leadsService.updateLead(this.lead).subscribe(
      () => {
        this.closeModal()
        this.destroy()
        this.ok(this.lead)
      },
      error => this.error = error
    )
  }

  cancel(): void {
    this.closeModal()
    this.destroy()
  }

}