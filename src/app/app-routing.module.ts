import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/company/add-company/add-company.component';
import { ListCompaniesComponent } from './components/company/list-companies/list-companies.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { AddJobopeningComponent } from './components/company/add-jobopening/add-jobopening.component';

const routes: Routes = [
  { path: 'companies', component: ListCompaniesComponent },
  { path: 'addCompany', component: AddCompanyComponent },
  { path: 'addJobOpening', component: AddJobopeningComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
