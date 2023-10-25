import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/Company';
import { ApiService } from 'src/app/api-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { JobOpening } from 'src/models/JobOpening'; 


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }
  companies: Company[] = [];
  ngOnInit(): void {
    this.apiService.getAllCompanies().subscribe(
      {
        next: (data: Company[]) => { console.log('-- getAllCompanies --', data); this.companies = data },
        error: (e) => console.error('Error:', e),
        complete: () => console.info('GetAllCompanies call completed.')
      });
  }

  toggleJobOpenings(company: Company): void {
    company.expanded = !company.expanded;
  }

  editJobOpening(jobOpening: JobOpening) {
    console.log('edit jobOpening:', jobOpening);
    this.router.navigate(['/jobopenings/edit', jobOpening]);
  }

  deleteJobOpening(jobOpening: JobOpening) {
    
  }

  editCompany(company: Company){
    console.log('routing', company.Name, 'to companies/edit')
    //this.router.navigate(['companies/edit', company.Id]);
  }

  deleteCompany(company: Company){}
  // editCompany(company: Company): void {
  //   // Implement the logic for editing the company here.
  //   this.router.navigate(['/companies/edit', company.Id]);
  // }

}
