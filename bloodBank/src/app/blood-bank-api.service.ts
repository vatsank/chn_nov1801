import { BloodRequest } from './blood-request';
import { BloodDonar } from './bloodDonar';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodBankAPIService {

  baseURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  findAllDonors(): Observable<BloodDonar[]> {
      return this.http.get<BloodDonar[]>(`${this.baseURL}donars`);
  }

  findAllDonorsWithExceptionHandling(name: string): Observable<BloodDonar[]> {

    if(name.length > 10) {
      throw Error('Length should be less than 10 ');
    } else {
    return this.http.get<BloodDonar[]>(`${this.baseURL}donars`);
    }
}

invoke() {
   try {
     this.findAllDonorsWithExceptionHandling('abc');
   } catch (error) {
      console.log(error.message);
   }
   finally{
      console.log('done');
   }
}
  findAllDonorsWithPromise(): Promise<HttpResponse<Object>> {
    return this.http.get<HttpResponse<Object>>('https://reqres.in/api/users/1').toPromise();
}

 getAllRequests(): Observable<BloodRequest[]> {

  return this.http.get<BloodRequest[]>(`${this.baseURL}requests`);

  }
}
