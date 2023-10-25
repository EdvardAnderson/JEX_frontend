import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/models/Company';
import { ApiService } from 'src/app/api-service.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})

  export class CompanyEditComponent implements OnInit {
    company: Company =new Company('', '', '', []);
  
    constructor(
      private route: ActivatedRoute,
      private apiService: ApiService
    ) {}
  
    ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.apiService.getCompanyById(id).subscribe((data: Company) => this.company = data);
    }
  
    onSubmit() {
      this.apiService.updateCompany(this.company).subscribe((data: any)=> console.log('update result:', data));
      
    }
}
