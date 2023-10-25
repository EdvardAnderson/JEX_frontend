import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/company/add-company/add-company.component';
import { ListCompaniesComponent } from './components/company/list-companies/list-companies.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { AddJobopeningComponent } from './components/company/add-jobopening/add-jobopening.component';
import { ManageJobOpeningComponent } from './components/jobopenings/manage/manage.component';
import { ManageCompanyComponent } from './components/company/manage/manage.component';
import { CompanyEditComponent } from './components/company/company-edit/company-edit.component';

const routes: Routes = [
  { path: 'companies', component: ListCompaniesComponent },
  { path: 'addCompany', component: AddCompanyComponent },
  { path: 'addJobOpening', component: AddJobopeningComponent },
  { path: 'manageJobOpenings', component:  ManageJobOpeningComponent},
  { path: 'manageCompanies', component: ManageCompanyComponent },
  { path: 'company/:id', component: CompanyDetailsComponent },
  { path: 'companies/edit/:id', component: CompanyEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
