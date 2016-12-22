import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Activity } from './activity.model'

@Component({
  selector: "lm-activity-form",
  templateUrl: "./activity-form.component.html"
})

export class ActivityFormComponent implements OnInit {
  
  @Input() activity: Activity
  @Input() submitButtonText: string
  @Output() onSubmit: EventEmitter<Activity> = new EventEmitter<Activity>()
  @Output() onCancel: EventEmitter<Activity> = new EventEmitter<Activity>()

  activityForm: FormGroup
  error: any
  formErrors: any = {
    'subject': '',
    'comments': ''
  }
  validationMessages: any = {
    'subject': {
      'required': 'Asunto requerido.'
    },
    'comments': {
      'required': 'Comentarios requerido.'
    }
  }
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    this.activityForm = this.formBuilder.group({
      '_id': [this.activity._id],
      'subject': [this.activity.subject, Validators.required],
      'comments': [this.activity.comments, Validators.required],
      'lead': [this.activity.lead]
    })
    this.activityForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    )
  }

  onValueChanged(data?: any): void {
    if (!this.activityForm) { return }
    for (const field in this.formErrors) {
      this.formErrors[field] = ''
      const control = this.activityForm.get(field)
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field]
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' '
        }
      }
    }
  }

}