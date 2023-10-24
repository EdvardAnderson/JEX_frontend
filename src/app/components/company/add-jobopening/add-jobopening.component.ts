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

  //DI with api service
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log('-- add jobopening: getCompanies --');
    this.apiService.getAllCompanies().subscribe(
      {
        next: (data: any) => this.companies = data['$values'],
        error: (e) => console.error('Error:', e),
        complete: () => console.info('GetCompanies call completed.')
      });
  }

  createJobOpening(): void {
    console.log(this.company);
    console.log('incoming data', this.company);
    this.apiService.createJobOpening(this.jobOpening)
      .subscribe(
        {
          next: (data) => this.submitted = true,
          error:(error) => console.error('Error creating a job opening:', error),
          complete:() => console.log(`Creating job for company  completed`)
        });
  }

}
