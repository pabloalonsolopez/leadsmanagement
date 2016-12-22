import { Schema, model } from "mongoose"

const ActivitySchema = new Schema({
  subject: String,
  comments: String,
  lead: {type: Schema.Types.ObjectId, ref: "Lead"}
},
{
  timestamps: true
})

const Activity = model("Activity", ActivitySchema)

export { Activity }