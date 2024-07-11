import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs';
import { JobStore } from './job.model';


@Injectable({
  providedIn: 'root'
})
export class CashingService {
  private storageName: string = "jobsAppStore";

  setData(data: JobStore[]) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  getData(): JobStore[] {
    let data = localStorage.getItem(this.storageName);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }
}
