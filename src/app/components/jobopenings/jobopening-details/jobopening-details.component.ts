import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/models/Company';
import { JobOpening } from 'src/models/JobOpening';
import { ApiService } from 'src/app/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobopening-details',
  templateUrl: './jobopening-details.component.html',
  styleUrls: ['./jobopening-details.component.css']
})
export class JobopeningDetailsComponent {


  constructor(private apiService: ApiService, private router: Router) { }
  @Input() companyJobs: Company = new Company('', '', '', []);
  @Input() editMode: boolean = false;

  editJobOpening(job: JobOpening) {

    this.router.navigate(['jobopenings/edit/', job.Id]);
    // this.apiService.updateJobOpening(job).subscribe({
    //   next: (result:JobOpening) => console.log('edit jobOpening', result),
    //   error: (e) => console.error('Error:', e),
    //   complete: () => console.info('edit jobopening call completed.')
    // })
  }

  deleteJobOpening(id: any) {
    console.log('delete job');
    this.apiService.deleteJobOpening(id).subscribe({
      next: (result: JobOpening) => console.log('edit jobOpening', result),
      error: (e) => console.error('Error:', e),
      complete: () => console.info('edit jobopening call completed.')

    })
    this.router.navigate(['/manageCompanies']);
  }
}
