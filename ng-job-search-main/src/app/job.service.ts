import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job, JobUI } from './job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {}

  getJobs(): Observable<JobUI[]> {
    return this.http.get<JobUI[]>('jobs');
  }

  getJob(id: number): Observable<JobUI> {
    return this.http.get<JobUI>('jobs/' + id);
  }
  
}
