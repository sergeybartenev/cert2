import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job, JobUI } from '../job.model';
import { CommonModule } from '@angular/common';
import { JobListItemComponent } from '../job-list-item/job-list-item.component';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobListItemComponent, RouterOutlet],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {

  jobs: JobUI[] = new Array<JobUI>();

  constructor(readonly jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
    })

  }
}
