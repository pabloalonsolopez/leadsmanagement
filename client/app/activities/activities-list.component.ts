import { Component, Input } from "@angular/core"

import { Activity } from "../activities/activity.model"

@Component({
  selector: "lm-activities-list",
  templateUrl: "./activities-list.component.html"
})

export class ActivitiesListComponent {
  
  @Input() activities: Activity[]

  getCreated(activity: Activity): string {
    return activity.createdAt.getDate() + "-" + (activity.createdAt.getMonth() + 1)
  }

}