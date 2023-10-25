import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListCompaniesComponent } from './components/company/list-companies/list-companies.component';
import { AddCompanyComponent } from './components/company/add-company/add-company.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { AddJobopeningComponent } from './components/company/add-jobopening/add-jobopening.component';
import { ManageJobOpeningComponent } from './components/jobopenings/manage/manage.component';
import { ManageCompanyComponent } from './components/company/manage/manage.component';
import { CompanyEditComponent } from './components/company/company-edit/company-edit.component';
import { EditJobopeningComponent } from './components/jobopenings/edit-jobopening/edit-jobopening.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCompaniesComponent,
    AddCompanyComponent,
    CompanyDetailsComponent,
    AddJobopeningComponent,
    ManageJobOpeningComponent,
    ManageCompanyComponent,
    CompanyEditComponent,
    EditJobopeningComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
