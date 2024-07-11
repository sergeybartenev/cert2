import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { JobStore, JobUI } from './job.model';
import { JobListComponent } from "./job-list/job-list.component";
import { JobService } from './job.service';
import { CashingService } from './cashing.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterLink, RouterLinkActive, RouterOutlet, HeaderComponent, CommonModule, JobListComponent]
})
export class AppComponent implements OnInit {

  static jobsStore: JobStore[] | undefined;

  jobs: JobUI[] = new Array<JobUI>();

  constructor(readonly jobService: JobService, private cacheService: CashingService) { }

  ngOnInit(): void {
    AppComponent.jobsStore = [];
    let dataFromCache: JobStore[] = this.cacheService.getData();

    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
      this.jobs.forEach((job) => {
        if (dataFromCache.length > 0) {
          AppComponent.jobsStore = dataFromCache;
        } else {
          AppComponent.jobsStore?.push({ id: job.id, checked: false })
        }
      });
    })
  }

  static getCheckedPropOfJob(id: number): boolean {
    let jobStore = AppComponent.jobsStore?.find((job) => job.id === id);
    return jobStore!.checked;
  }

}
