import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/Company';
import { ApiService } from 'src/app/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor(private apiService: ApiService, private router:Router) { }
  companies : Company[] = [];
  ngOnInit(): void {
    this.apiService.getAllCompanies().subscribe(
      {
        next: (data: Company[]) => this.companies = data,
        error: (e) => console.error('Error:', e),
        complete: () => console.info('GetAllCompanies call completed.')
      });
  }

}
