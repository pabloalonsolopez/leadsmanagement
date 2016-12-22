import { Schema, model } from "mongoose"

const LeadSchema = new Schema({
  mobileNumber: String,
  email: String,
  documentNumber: String,
  fixNumber: String,
  addressStreetType: String,
  addressStreetName: String,
  addressNumber: String,
  addressDoorway: String,
  addressLadder: String,
  addressFloor: String,
  addressDoor: String,
  addressCity: String,
  addressProvince: String,
  addressPostalCode: String,
  addressCountry: String,
  serviceType: String,
  offerType: String,
  changeReason: String,
  currentCompany: String,
  preferredContactTime: String,
  preferredContactMethod: String,
  status: String
})

const Lead = model("Lead", LeadSchema)

export { Lead }