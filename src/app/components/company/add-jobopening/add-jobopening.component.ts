import { Component } from '@angular/core';
import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';

@Component({
  selector: 'app-add-jobopening',
  templateUrl: './add-jobopening.component.html',
  styleUrls: ['./add-jobopening.component.css']
})
export class AddJobopeningComponent {

  companies: Company[] = []
  company = {
    name: '',
    address: '',
    jobOpenings: []
  }

  jobOpening = {
    companyId: '',
    title: '',
    description: '',
    active: false
  }

  submitted = false;
  // onSubmit() {
  //   console.log('Sbmitted');
  //   this.apiService.createCompany(this.company);
  //   this.submitted = true; }

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

  createJobOpening(): void {
    console.log(this.company);
    const data = {

    };
    console.log('incoming data', this.company);
    this.apiService.createJobOpening(this.jobOpening)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log('ERROR TERROR', error);
        });
  }

}
