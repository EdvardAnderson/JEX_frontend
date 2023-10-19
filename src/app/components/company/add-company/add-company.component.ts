import { Component } from '@angular/core';
import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {
  company = {
    name:'',
    address:'',
    jobOpenings: []
  }

  jobOpening = {
    title:'',
    description:'',
    active: false
  }
  
  submitted = false;
  // onSubmit() {
  //   console.log('Sbmitted');
  //   this.apiService.createCompany(this.company);
  //   this.submitted = true; }

  //DI with api service
  constructor(private apiService: ApiService) { }

  createCompany(): void {
    console.log(this.company);
    const data = {
      
    };
    console.log('incoming data', this.company);
    this.apiService.createCompany(this.company)
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
