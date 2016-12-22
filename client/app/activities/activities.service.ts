import { Injectable } from "@angular/core"
import { RequestOptions, Headers, Http, Response, URLSearchParams } from "@angular/http"

import { Observable } from "rxjs/Observable"

import { Activity } from "./activity.model"

@Injectable()
export class ActivitiesService {

  private activitiesUrl = "api/activities"
  private options = new RequestOptions({ headers: new Headers({ "Content-Type": "application/json" }) })

  constructor(private http: Http) {}

  getActivities(lead?: string): Observable<Activity[]> {
    let parameters = new URLSearchParams()
    if (lead) {
      parameters.set('lead', lead)
    }
    return this.http.get(this.activitiesUrl, {search: parameters})
      .map(this.extractData)
      .catch(this.handleError)
  }
  
  getActivity(id: string): Observable<Activity> {
    return this.http.get(`${this.activitiesUrl}/${id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post(this.activitiesUrl, JSON.stringify(activity), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return this.http.put(`${this.activitiesUrl}/${activity._id}`, JSON.stringify(activity), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  deleteActivity(activity: Activity): Observable<Activity> {
    return this.http.delete(`${this.activitiesUrl}/${activity._id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(response: Response): Observable<any> {
    return response.json() || {}
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error)
  }
  
}