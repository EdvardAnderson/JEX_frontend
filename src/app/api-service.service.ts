import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'https://localhost:7066/api/';

  constructor(private http: HttpClient) { }

  // Example method to make a GET request
  getCompanies() {
    return this.http.get(this.baseUrl + 'companies');
  }

  createCompany(data: any) : Observable<any> {
    console.log('createCompany',data);
    return this.http.post(this.baseUrl + 'companies', data);
  }

  // Add methods for POST, PUT, DELETE as needed
}
