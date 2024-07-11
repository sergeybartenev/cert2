import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { FavoritesListItemComponent } from './favorites-list-item/favorites-list-item.component';

export const routes: Routes = [
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: 'jobs',  component: JobListComponent },
    { path: 'jobs/:id', component: JobDetailComponent },
    { path: 'favorites',  component: FavoritesListComponent },
    { path: 'favorites/:id', component: FavoritesListItemComponent },
  ];

  @NgModule({
    imports: [HttpClientModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
