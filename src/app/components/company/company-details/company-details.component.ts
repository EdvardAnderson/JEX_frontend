import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';
import { JobOpening } from 'src/models/JobOpening';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company : Company = new Company('','','',[]);
  jobOpenings: JobOpening[] = []

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.apiService.getCompanyById(id).subscribe((data: Company) => this.company = data);
  }
}
