import { Component, Input } from "@angular/core"

import "../../../assets/images/icons/logo.svg"
import "../../../assets/images/icons/search.svg"

@Component({
  selector: "lm-icon",
  templateUrl: "./icon.component.html"
})

export class IconComponent {

  @Input() icon: string

}