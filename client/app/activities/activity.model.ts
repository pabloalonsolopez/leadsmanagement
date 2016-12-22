export class Activity {
  
  _id: string
  subject: string
  comments: string
  lead: string
  createdAt: Date
  updatedAt: Date

  constructor(activity?: any) {
    if(activity) {
      this._id = activity._id
      this.subject = activity.subject
      this.comments = activity.comments
      this.lead = activity.lead
      this.createdAt = new Date(activity.createdAt)
      this.updatedAt = new Date(activity.updatedAt)
    }
  }
  
}