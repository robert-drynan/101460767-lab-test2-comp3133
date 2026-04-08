import { Routes } from '@angular/router';
import { Characterlist } from './characterlist/characterlist';
import { Characterfilter } from './characterfilter/characterfilter';
import { Characterdetails } from './characterdetails/characterdetails';

export const routes: Routes = [
  { path: '', component: Characterlist },
  { path: 'filter', component: Characterfilter },
  { path: 'character/:id', component: Characterdetails },
];
