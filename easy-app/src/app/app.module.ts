import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


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
import { EditUserComponent } from './pages/admin/admin-users/edit-user/edit-user.component';
import { NewUserComponent } from './pages/admin/admin-users/new-user/new-user.component';
import { EditCompanyComponent } from './pages/admin/admin-companies/edit-company/edit-company.component';
import { EditPlanComponent } from './pages/admin/admin-plans/edit-plan/edit-plan.component';
import { NewPlanComponent } from './pages/admin/admin-plans/new-plan/new-plan.component';
import { NewTemplateComponent } from './pages/admin/admin-templates/new-template/new-template.component';
import { EditTemplateComponent } from './pages/admin/admin-templates/edit-template/edit-template.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { BancoImagenesComponent } from './pages/empresa/banco-imagenes/banco-imagenes.component';
import { AdminPaginasComponent } from './pages/empresa/admin-paginas/admin-paginas.component';
import { ConfigSitioComponent } from './pages/empresa/config-sitio/config-sitio.component';
import { ProductosCategoriasComponent } from './pages/empresa/productos-categorias/productos-categorias.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
    EditUserComponent,
    NewUserComponent,
    EditCompanyComponent,
    EditPlanComponent,
    NewPlanComponent,
    NewTemplateComponent,
    EditTemplateComponent,
    EmpresaComponent,
    ClienteComponent,
    BancoImagenesComponent,
    AdminPaginasComponent,
    ConfigSitioComponent,
    ProductosCategoriasComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
