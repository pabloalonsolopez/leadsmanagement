import { Injectable } from "@angular/core"
import { RequestOptions, Headers, Http, Response } from "@angular/http"

import { Observable } from "rxjs/Observable"

import { Lead } from "./lead.model"

@Injectable()
export class LeadsService {

  private leadsUrl = "api/leads"
  private options = new RequestOptions({ headers: new Headers({ "Content-Type": "application/json" }) })

  constructor(private http: Http) {}

  getLeads(): Observable<Lead[]> {
    return this.http.get(this.leadsUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }
  
  getLead(id: string): Observable<Lead> {
    return this.http.get(`${this.leadsUrl}/${id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  createLead(lead: Lead): Observable<Lead> {
    return this.http.post(this.leadsUrl, JSON.stringify(lead), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  updateLead(lead: Lead): Observable<Lead> {
    return this.http.put(`${this.leadsUrl}/${lead._id}`, JSON.stringify(lead), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  deleteLead(lead: Lead): Observable<Lead> {
    return this.http.delete(`${this.leadsUrl}/${lead._id}`)
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