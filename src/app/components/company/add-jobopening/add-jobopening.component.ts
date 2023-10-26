import { Component } from '@angular/core';
import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';
import { JobOpening } from 'src/models/JobOpening';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jobopening',
  templateUrl: './add-jobopening.component.html',
  styleUrls: ['./add-jobopening.component.css']
})

export class AddJobopeningComponent {

  companies: Company[] = []
  company = {
    Name: '',
    Address: '',
    JobOpenings: [] = []
  }

  jobOpening = {
    CompanyId: '',
    Title: '',
    Description: '',
    IsActive: false
  }

  submitted = false;

  //DI with api service
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    console.log('-- add jobopening: getCompanies --');
    this.apiService.getAllCompanies().subscribe(
      {
        next: (data: Company[]) => { this.companies = data; console.log(data) },
        error: (e) => console.error('Error:', e),
        complete: () => console.info('GetCompanies call completed.')
      });
      this.jobOpening.IsActive = false;
      console.log('empty:', this.jobOpening);
  }

  createJobOpening(): void {
    console.log('creatting a new jobopening:', this.jobOpening);
    setTimeout(() => {
     
      this.apiService.createJobOpening(this.jobOpening)
        .subscribe(
          {
            next: (data) => this.submitted = true,
            error: (error) => console.error('Error creating a job opening:', error),
            complete: () => this.submitted = true
          })
    }, 1000)
    // Navigate to your desired route after the delay
    this.router.navigate(['/manageCompanies']).then(() => {
      window.location.reload();
    });;;


  }

}
