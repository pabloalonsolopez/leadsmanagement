import { Router, Request, Response, NextFunction } from "express"
import { model } from "mongoose"

const LeadsRouter: Router = Router()

const Lead = model("Lead")

LeadsRouter.get("/", function(request: Request, response: Response, next: NextFunction) {
  Lead.find(function(err, leads) {
    if (err) return next(err)
    response.json(leads)
  })
})

LeadsRouter.post("/", function(request: Request, response: Response, next: NextFunction) {
  Lead.create(request.body, function(err, lead) {
    if (err) return next(err)
    response.json(lead)
  })
})

LeadsRouter.get("/:id", function(request: Request, response: Response, next: NextFunction) {
  Lead.findById(request.params.id, function(err, lead) {
    if (err) return next(err)
    response.json(lead)
  })
})

LeadsRouter.put("/:id", function(request: Request, response: Response, next: NextFunction) {
  Lead.findByIdAndUpdate(request.params.id, request.body, { new: true }, function(err, lead) {
    if (err) return next(err)
    response.json({})
  })
})

LeadsRouter.delete("/:id", function(request: Request, response: Response, next: NextFunction) {
  Lead.findByIdAndRemove(request.params.id, function(err, lead) {
    if (err) return next(err)
    response.json({})
  })
})

export { LeadsRouter }