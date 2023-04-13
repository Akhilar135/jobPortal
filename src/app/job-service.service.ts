import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {Job} from "src/app/job"

@Injectable({
providedIn: 'root'

})

export class JobServiceService {
private API_URL="http://localhost:5003/jobs"
constructor(private http:HttpClient) { }
getJobs(): Observable<Job[]>{
return this.http.get<Job[]>(this.API_URL)
 }

}