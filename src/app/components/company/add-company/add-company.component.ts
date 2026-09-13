import { Component } from '@angular/core';
import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';
import { Router } from '@angular/router';

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
  constructor(private apiService: ApiService, private router: Router) { }

  createCompany(): void {
    console.log(this.company);
    const data = {
      
    };
    console.log('incoming data', this.company);
    setTimeout(() => {
      this.apiService.createCompany(this.company).subscribe({
        next: (response:any) =>console.log(response),
        error: (e) => console.error(e),
        complete: ()=> 
          //console.log('company creation completed')
          this.submitted = true
    })
      // Navigate to your desired route after the delay
      this.router.navigate(['/manageCompanies']);
    }, 1000); // 1000ms = 1 second

  }

}
