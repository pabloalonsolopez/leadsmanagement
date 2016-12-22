import { Activity } from "../activities/activity.model"

export class Lead {
  
  _id: string
  mobileNumber: string
  email: string
  documentNumber: string
  fixNumber: string
  addressStreetType: string
  addressStreetName: string
  addressNumber: string
  addressDoorway: string
  addressLadder: string
  addressFloor: string
  addressDoor: string
  addressCity: string
  addressProvince: string
  addressPostalCode: string
  addressCountry: string
  serviceType: string
  offerType: string
  changeReason: string
  currentCompany: string
  preferredContactTime: string
  preferredContactMethod: string
  status: string
  activities: Activity[]
  createdAt: Date
  updatedAt: Date
  
  constructor(lead?: any) {
    if(lead) {
      this._id = lead._id
      this.mobileNumber = lead.mobileNumber
      this.email = lead.email
      this.documentNumber = lead.documentNumber
      this.fixNumber = lead.fixNumber
      this.addressStreetType = lead.addressStreetType
      this.addressStreetName = lead.addressStreetName
      this.addressNumber = lead.addressNumber
      this.addressDoorway = lead.addressDoorway
      this.addressLadder = lead.addressLadder
      this.addressFloor = lead.addressFloor
      this.addressDoor = lead.addressDoor
      this.addressCity = lead.addressCity
      this.addressProvince = lead.addressProvince
      this.addressPostalCode = lead.addressPostalCode
      this.addressCountry = lead.addressCountry
      this.serviceType = lead.serviceType
      this.offerType = lead.offerType
      this.changeReason = lead.changeReason
      this.currentCompany = lead.currentCompany
      this.preferredContactTime = lead.preferredContactTime
      this.preferredContactMethod = lead.preferredContactMethod
      this.status = lead.status
      this.activities = lead.activities
      this.createdAt = new Date(lead.createdAt)
      this.updatedAt = new Date(lead.updatedAt)
    }
  }

}