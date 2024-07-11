import { Component, Input, OnInit } from '@angular/core';
import { Job, JobUI } from '../job.model';
import { Observable, map } from 'rxjs';
import { JobService } from '../job.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites-list-item.component.html',
  styleUrl: './favorites-list-item.component.css'
})
export class FavoritesListItemComponent {
  @Input() job!: JobUI;
  @Input() index!: number;

  job$!: Observable<JobUI>;

  constructor(private jobService: JobService, private route: ActivatedRoute) {}
  
}
