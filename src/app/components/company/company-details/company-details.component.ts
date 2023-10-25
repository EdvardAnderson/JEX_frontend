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
export class CompanyDetailsComponent implements OnInit{
 jobOpenings : JobOpening[]  = []
 
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    // Get the company ID from the route parameter
    const companyId = this.route.snapshot.paramMap.get('id');
    
    // Fetch the company details including job openings using the ID
    this.apiService.getCompanyById(companyId).subscribe({
      next:(data:any) => this.jobOpenings = data.JobOpenings
    });
  }
}
