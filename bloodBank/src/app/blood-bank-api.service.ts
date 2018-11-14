import { BloodDonar } from './bloodDonar';
import { HttpClient } from '@angular/common/http';
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

  findAllDonorsWithPromise(): Promise<BloodDonar[]> {
    return this.http.get<BloodDonar[]>(`${this.baseURL}donars`).toPromise();
}

}
