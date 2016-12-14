import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Lead } from './lead.model'

@Component({
  selector: "lm-lead-form",
  templateUrl: "./lead-form.component.html"
})

export class LeadFormComponent implements OnInit {
  
  @Input() lead: Lead
  @Input() submitText: string
  @Output() onSubmit: EventEmitter<Lead> = new EventEmitter<Lead>()
  @Output() onCancel: EventEmitter<Lead> = new EventEmitter<Lead>()

  leadForm: FormGroup
  error: any
  formErrors: any = {
    'name': ''
  }
  validationMessages: any = {
    'name': {
      'required': 'Nombre requerido.'
    }
  }
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.leadForm = this.formBuilder.group({
      '_id': [this.lead._id],
      'name': [this.lead.name, Validators.required]
    })
    this.leadForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    )
  }

  onValueChanged(data?: any): void {
    if (!this.leadForm) { return }
    for (const field in this.formErrors) {
      this.formErrors[field] = ''
      const control = this.leadForm.get(field)
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field]
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' '
        }
      }
    }
  }

}