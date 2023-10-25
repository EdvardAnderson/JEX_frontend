import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/models/Company';
import { JobOpening } from 'src/models/JobOpening';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  private baseUrl = 'https://localhost:7066/api/';

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    console.log('-- api service: getCompanies --');
    const companies =  this.http.get<Company[]>(this.baseUrl + 'companies');
    console.log('companies:', companies);
    return this.http.get<Company[]>(this.baseUrl + 'companies');
  }


  getCompaniesWithJobOpenings(): Observable<Company[]>  {
    
    return this.http.get<Company[]>(this.baseUrl + 'companies/jobs');
  }

  getCompanyById(companyId: string) {
    return this.http.get<Company>(this.baseUrl + 'companies/' + companyId);
  }

  getJobOpeningById(jobOpeningId: string) {
    console.log('-- api service getJobOpeningById --')
    return this.http.get<JobOpening>(this.baseUrl + 'companies/jobs/' + jobOpeningId);
  }

  createCompany(data: any): Observable<any> {
    console.log('createCompany', data);
    return this.http.post(this.baseUrl + 'companies', data);
 
  }

 updateCompany(data: Company): Observable<any> {
    console.log('updateCompany', data);
    return this.http.put<Company>(`${this.baseUrl}companies/edit/${data.Id}`, data);
    //return this.http.put(this.baseUrl + 'companies/edit', data.Id);
  }

  updateJobOpening(data: JobOpening): Observable<any> {
    console.log('updateJobopening', data);
    return this.http.put<JobOpening>(`${this.baseUrl}companies/jobopenings/${data.Id}`, data);
    //return this.http.put(this.baseUrl + 'companies/edit', data.Id);
  }

  createJobOpening(data: any): Observable<any> {
    console.log('createJobOpening', data);
    return this.http.post(this.baseUrl + 'companies/jobs', data);
  }

  // Add methods for POST, PUT, DELETE as needed
}
