import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { PricingComponent } from './components/pricing/pricing.component';

const ROUTES: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-companies', component: EmpresaComponent },
  { path: 'companies', component: ClienteComponent },
  { path: 'planes', component: PricingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
