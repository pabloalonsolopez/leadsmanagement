import { Router, Request, Response, NextFunction } from "express"
import { model, Types } from "mongoose"

const ActivitiesRouter: Router = Router()

const Activity = model("Activity")

ActivitiesRouter.get("/", function(request: Request, response: Response, next: NextFunction) {
  let search: any = {}
  if (request.query.lead) {
    search["lead"] = new Types.ObjectId(request.query.lead)
  }
  Activity.find(search, function(err, activities) {
    if (err) return next(err)
    response.json(activities)
  })
})

ActivitiesRouter.post("/", function(request: Request, response: Response, next: NextFunction) {
  Activity.create(request.body, function(err, activity) {
    if (err) return next(err)
    response.json(activity)
  })
})

ActivitiesRouter.get("/:id", function(request: Request, response: Response, next: NextFunction) {
  Activity.findById(request.params.id, function(err, activity) {
    if (err) return next(err)
    response.json(activity)
  })
})

ActivitiesRouter.put("/:id", function(request: Request, response: Response, next: NextFunction) {
  Activity.findByIdAndUpdate(request.params.id, request.body, { new: true }, function(err, activity) {
    if (err) return next(err)
    response.json({})
  })
})

ActivitiesRouter.delete("/:id", function(request: Request, response: Response, next: NextFunction) {
  Activity.findByIdAndRemove(request.params.id, function(err, activity) {
    if (err) return next(err)
    response.json({})
  })
})

export { ActivitiesRouter }