import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JobUI } from '../job.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from "../back-button/back-button.component";

@Component({
    selector: 'app-job-detail',
    standalone: true,
    templateUrl: './job-detail.component.html',
    styleUrl: './job-detail.component.css',
    imports: [CommonModule, RouterModule, BackButtonComponent]
})
export class JobDetailComponent implements OnInit {

  job$!: Observable<JobUI | undefined>;

  constructor(private jobService: JobService, private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.job$ = this.jobService.getJob(this.route.snapshot.params['id']);
  }

}
