import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent {
  companies: Company[] = []
  //DI with api service and router
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {
    this.apiService.getCompaniesWithJobOpenings().subscribe(
      {
        next: (data: Company[]) =>  {console.log('-- getCompaniesWithJobOpenings --',data); this.companies = data}, //(this.companies = data),
        error: (e) => console.error('Error:', e),
        complete: () => console.info('GetCompanies with jobopenings call completed.')
      });
  }

  showCompanyDetails(company: Company) {
    console.log('-- showCompanyDetails --', company);
    this.router.navigate(['/company', company.Id]);
  }

  toggleCompanyDetails(company: Company): void {
    company.expanded = !company.expanded;
  }

  alertIt(itemId: string) {
    alert(`Item ID: ${itemId}`);
  }
}
