import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Job, JobStore, JobUI } from '../job.model';
/* import { JobService } from '../job.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; */
import { ActivatedRoute, RouterLinkActive, RouterModule } from '@angular/router';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';
import { JobDetailComponent } from "../job-detail/job-detail.component";
import { AppComponent } from '../app.component';
import { CashingService } from '../cashing.service';


@Component({
    selector: 'app-job-list-item',
    standalone: true,
    templateUrl: './job-list-item.component.html',
    styleUrl: './job-list-item.component.css',
    imports: [CommonModule, RouterModule, RouterLinkActive, JobDetailComponent]
})
export class JobListItemComponent implements OnInit {

  @Input() job!: JobUI;
  @Input() index!: number;

  job$!: Observable<JobUI>;

  jobChecked: boolean = false;

  constructor(private jobService: JobService, private route: ActivatedRoute, private cacheService: CashingService) {}

  toggleJobChecked(id: number, checked: boolean) {   
    this.jobService.getJob(id).subscribe((data) => {
      this.job.checked = !checked;  
    })
    AppComponent.jobsStore?.map(job => job.checked = (job.id === id ? !checked : job.checked));
    this.jobChecked = AppComponent.getCheckedPropOfJob(id);
    this.cacheService.setData(AppComponent.jobsStore!);
  }

  ngOnInit(): void {
    this.jobChecked! = AppComponent.jobsStore?.find((job) => job.id === this.job.id)?.checked!; 
  }
}