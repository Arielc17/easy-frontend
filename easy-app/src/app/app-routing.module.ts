import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminComponent } from './pages/admin/admin.component';


const ROUTES: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
