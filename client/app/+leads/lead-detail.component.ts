import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Params, Router } from "@angular/router"
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

import { ModalService } from "../core/modal/modal.service"
import { SharedModule } from "../shared/shared.module"
import { ConfirmModalComponent } from "../shared/confirm-modal/confirm-modal.component"
import { LeadsModule } from "./leads.module"
import { LeadEditComponent } from "./lead-edit.component"

import { Lead } from "./lead.model"
import { LeadsService } from "./leads.service"
import { Activity } from "../activities/activity.model"
import { ActivitiesService } from "../activities/activities.service"

@Component({
  selector: "lm-lead-detail",
  templateUrl: "./lead-detail.component.html"
})

export class LeadDetailComponent implements OnInit {

  lead: Lead
  error: any

  constructor(private route: ActivatedRoute, private router: Router, private modalService: ModalService, private leadsService: LeadsService, private activitiesService: ActivitiesService, private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.leadsService.getLead(params["id"])
          .subscribe(
            lead => {
              this.lead = lead
              this.activitiesService.getActivities(this.lead._id)
                .subscribe(
                  activities => this.lead.activities = activities.map((activity) => new Activity(activity)),
                  error => this.error = error
                )
            },
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
    this.modalService.create(SharedModule, ConfirmModalComponent, {
      title: 'Eliminar Cliente Potencial',
      body: '¿Está seguro de querer eliminar el cliente potencial?',
      okButtonText: 'Estoy seguro',
      koButtonText: 'Lo he pensado mejor',
      decision: (agree: boolean) => {
        if(agree) {
          this.leadsService.deleteLead(this.lead).subscribe(
            () => this.router.navigate(["/leads"]),
            error => this.error = error
          )
        }
      }
    })
  }

  getGoogleMapsUrl(): SafeResourceUrl {
    let url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDYb5mXvh4rpkhGS_KMZmXeHS-GLm3AT2c&language=es&q="
    url += this.lead.addressStreetType + " "
    url += this.lead.addressStreetName + " "
    url += this.lead.addressNumber + " "
    url += this.lead.addressDoorway + " "
    url += this.lead.addressLadder + " "
    url += this.lead.addressFloor + " "
    url += this.lead.addressDoor + " "
    url += this.lead.addressCity + " "
    url += this.lead.addressProvince + " "
    url += this.lead.addressCountry
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }

}