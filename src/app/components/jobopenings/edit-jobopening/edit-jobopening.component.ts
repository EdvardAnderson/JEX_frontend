import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOpening } from 'src/models/JobOpening';
import { ApiService } from 'src/app/api-service.service';
import { Company } from 'src/models/Company';

@Component({
  selector: 'app-edit-jobopening',
  templateUrl: './edit-jobopening.component.html',
  styleUrls: ['./edit-jobopening.component.css']
})
export class EditJobopeningComponent {
  company: Company =new Company('', '', '', []);
  jobOpening: JobOpening = new JobOpening('', '', '', false); // Initialize with empty values

  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    console.log(id, this.jobOpening);
    this.apiService.getJobOpeningById(id).subscribe((data: JobOpening) => this.jobOpening = data);
  }
onSubmit(){
  this.apiService.updateJobOpening(this.jobOpening).subscribe((data: any)=> console.log('update result:', data));
  
  this.router.navigate(['/manageCompanies/']);
}
}
