import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { PricingComponent } from './components/pricing/pricing.component';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminCompaniesComponent } from './pages/admin/admin-companies/admin-companies.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { AdminTemplatesComponent } from './pages/admin/admin-templates/admin-templates.component';
import { AdminPlansComponent } from './pages/admin/admin-plans/admin-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    LoginSignupComponent,
    PricingComponent,
    AdminComponent,
    SidebarComponent,
    AdminCompaniesComponent,
    AdminUsersComponent,
    AdminTemplatesComponent,
    AdminPlansComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
