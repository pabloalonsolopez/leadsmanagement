import { Component, OnInit, Input } from "@angular/core"

import { Activity } from "../activities/activity.model"
import { ActivitiesService } from "../activities/activities.service"

import { Lead } from "./lead.model"

@Component({
  selector: "lm-lead-activity-new",
  templateUrl: "./lead-activity-new.component.html"
})

export class LeadActivityNewComponent implements OnInit {
  
  @Input() lead: Lead
  activity: Activity
  error: any

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.activity = new Activity()
    this.activity.lead = this.lead._id
  }

  createActivity(activity: Activity): void {
    this.activity = activity
    delete this.activity._id
    this.activitiesService.createActivity(this.activity).subscribe(
      activity => this.activity = activity,
      error => this.error = error
    )
  }

  cancel(): void {
      
  }

}