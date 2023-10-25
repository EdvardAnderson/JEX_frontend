import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/company/add-company/add-company.component';
import { ListCompaniesComponent } from './components/company/list-companies/list-companies.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { AddJobopeningComponent } from './components/company/add-jobopening/add-jobopening.component';
import { ManageCompanyComponent } from './components/company/manage/manage.component';
import { CompanyEditComponent } from './components/company/company-edit/company-edit.component';
import { EditJobopeningComponent } from './components/jobopenings/edit-jobopening/edit-jobopening.component';

const routes: Routes = [
  {path: 'companies', component: ListCompaniesComponent},
  {
    path: 'companies/edit/:id',
    component: CompanyEditComponent,
    outlet: 'edit', // Use a named router outlet
  },
  { path: 'addCompany', component: AddCompanyComponent },
  { path: 'addJobOpening', component: AddJobopeningComponent },
  { path: 'manageCompanies', component: ManageCompanyComponent },
  { path: 'company/:id', component: CompanyDetailsComponent },
  { path: 'jobopenings/edit/:id', component: EditJobopeningComponent }
         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
