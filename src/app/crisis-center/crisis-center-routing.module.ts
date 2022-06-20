import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const routes: Routes = [
  { path: 'heroes', component: CrisisListComponent, data: { animation: 'heroes' } },
  { path: 'hero/:id', component: CrisisDetailComponent, data: { animation: 'hero'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
