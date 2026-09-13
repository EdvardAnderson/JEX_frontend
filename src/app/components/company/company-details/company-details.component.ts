import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';
import { JobOpening } from 'src/models/JobOpening';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
@Input() companyItem:Company = new Company('','','',[]);

//toggle the edit/delete buttons
@Input() editMode:boolean = false;
@Input() jobCount:number = 0;

  company : Company = new Company('','','',[]);
  jobOpenings: JobOpening[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    
  }

  toggleCompanyDetails(company: Company): void {
    company.expanded = !company.expanded;
  }

  navigateAddJobOpening()
  {
    this.router.navigate(['/addJobOpening/']);
  }

  editCompany(id: any)
  {
    console.log(this.editMode)
    //const id = this.route.snapshot.params['id'];
    console.log(id); 
    this.router.navigate(['/companies/edit', id]).then(() => {
      window.location.reload();
    });;
  }

  deleteCompany(id: any){
    console.log('deleting company with id:', id);
    this.apiService.deleteCompany(id).subscribe(
      {
        next: (result: Company[]) => { console.log(result)},
        error: (e) => console.error('Error:', e),
        complete: () => console.info('GetCompanies call completed.')
      });
      this.router.navigate(['/manageCompanies']).then(() => {
        window.location.reload();
      });;

  }
}
