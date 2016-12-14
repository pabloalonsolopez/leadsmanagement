import { Schema, model } from "mongoose"

const LeadSchema = new Schema({
  name: String
})

const Lead = model("Lead", LeadSchema)

export { Lead }