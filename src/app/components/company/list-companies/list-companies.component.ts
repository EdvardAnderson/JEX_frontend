import { Component } from '@angular/core';

import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent {
  companies: Company[] = []
  //DI with api service
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    console.log('fetching companies..');
    this.apiService.getCompanies().subscribe((response) => {
      this.companies = response as any;
    })
  }

}
