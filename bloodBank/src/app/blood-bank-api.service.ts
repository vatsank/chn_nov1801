import { BloodRequest } from './blood-request';
import { BloodDonar } from './bloodDonar';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodBankAPIService {

  baseURL = 'http://localhost:3000/';

  hdrs = new HttpHeaders().set('content-type', 'application/json');

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

   addRequest(request: BloodRequest): Observable<BloodRequest>{


    return this.http.post<BloodRequest>(`${this.baseURL}requests`,
                  request, {headers: this.hdrs});
   }

   removeRequest(request:BloodRequest): Observable<BloodRequest> {

    return this.http.delete<BloodRequest>(`${this.baseURL}requests/${request.id}`, {headers: this.hdrs});
   }

   updateRequest(request:BloodRequest):Observable<BloodRequest>{

    return this.http.put<BloodRequest>(`${this.baseURL}requests/${request.id}`, request, {headers: this.hdrs});

   }
}
