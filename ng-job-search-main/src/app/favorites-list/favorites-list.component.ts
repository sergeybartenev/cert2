import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { JobUI } from '../job.model';
import { FavoritesListItemComponent } from "../favorites-list-item/favorites-list-item.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-favorites-list',
    standalone: true,
    templateUrl: './favorites-list.component.html',
    styleUrl: './favorites-list.component.css',
    imports: [FavoritesListItemComponent, CommonModule, RouterLink, RouterLinkActive]
})
export class FavoritesListComponent implements OnInit {
  jobs: JobUI[] = new Array<JobUI>();
  emptyList!: boolean;

  constructor(readonly jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
      this.jobs = data.filter((item) => AppComponent.getCheckedPropOfJob(item.id) === true);
      this.emptyList = this.jobs.length > 0 ? false : true;
    })
      
  }
  
  
}
