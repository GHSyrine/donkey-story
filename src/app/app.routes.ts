import { Routes } from '@angular/router';
import { CreateDonkeyComponent } from './create-donkey/create-donkey.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

  {path : 'home', component: HomeComponent},
  {path : 'create', component: CreateDonkeyComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } 

];
