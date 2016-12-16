import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Lead } from './lead.model'

@Component({
  selector: "lm-lead-form",
  templateUrl: "./lead-form.component.html"
})

export class LeadFormComponent implements OnInit {
  
  @Input() lead: Lead
  @Input() submitButtonText: string
  @Output() onSubmit: EventEmitter<Lead> = new EventEmitter<Lead>()
  @Output() onCancel: EventEmitter<Lead> = new EventEmitter<Lead>()

  leadForm: FormGroup
  error: any
  formErrors: any = {
    'mobileNumber': '',
    'email': '',
    'documentNumber': '',
    'fixNumber': '',
    'addressStreetType': '',
    'addressStreetName': '',
    'addressNumber': '',
    'addressLadder': '',
    'addressFloor': '',
    'addressCity': '',
    'addressProvince': '',
    'addressPostalCode': '',
    'serviceType': '',
    'offerType': '',
    'changeReason': '',
    'currentCompany': '',
    'preferredContactTime': '',
    'preferredContactMethod': '',
    'comments': '',
    'status': ''
  }
  validationMessages: any = {
    'serviceType': {
      'required': 'Tipo de Servicio requerido.'
    },
    'offerType': {
      'required': 'Tipo de Oferta requerido.'
    },
    'changeReason': {
      'required': 'Motivo de Cambio requerido.'
    },
    'currentCompany': {
      'required': 'Compañía Actual requerido.'
    }
  }
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.leadForm = this.formBuilder.group({
      '_id': [this.lead._id],
      'mobileNumber': [this.lead.mobileNumber],
      'email': [this.lead.email],
      'documentNumber': [this.lead.documentNumber],
      'fixNumber': [this.lead.fixNumber],
      'addressStreetType': [this.lead.addressStreetType],
      'addressStreetName': [this.lead.addressStreetName],
      'addressNumber': [this.lead.addressNumber],
      'addressLadder': [this.lead.addressLadder],
      'addressFloor': [this.lead.addressFloor],
      'addressCity': [this.lead.addressCity],
      'addressProvince': [this.lead.addressProvince],
      'addressPostalCode': [this.lead.addressPostalCode],
      'serviceType': [this.lead.serviceType, Validators.required],
      'offerType': [this.lead.offerType, Validators.required],
      'changeReason': [this.lead.changeReason, Validators.required],
      'currentCompany': [this.lead.currentCompany, Validators.required],
      'preferredContactTime': [this.lead.preferredContactTime],
      'preferredContactMethod': [this.lead.preferredContactMethod],
      'comments': [this.lead.comments],
      'status': [this.lead.status]
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