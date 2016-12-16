import { Component, Input } from "@angular/core"

import { Modal } from "../../core/modal/modal.module"

@Component({
  selector: "lm-confirm-modal",
  templateUrl: "./confirm-modal.component.html"
})

@Modal()
export class ConfirmModalComponent {

  destroy: Function
  closeModal: Function
  decision: Function

  @Input() title: string
  @Input() body: string
  @Input() okButtonText: string
  @Input() koButtonText: string

  ok(): void {
    this.closeModal()
    this.destroy()
    this.decision(true)
  }

  ko(): void {
    this.closeModal()
    this.destroy()
    this.decision(false)
  }

}