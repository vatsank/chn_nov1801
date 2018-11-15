import { BloodRequest } from './../blood-request';
import { BloodBankAPIService } from './../blood-bank-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-request',
  templateUrl: './manage-request.component.html',
  styleUrls: ['./manage-request.component.css']
})
export class ManageRequestComponent implements OnInit {

  srchGroup = '';
  requestList: BloodRequest[];
  constructor(private service: BloodBankAPIService) { }

  ngOnInit() {

    this.service.getAllRequests().subscribe(resp => this.requestList = resp);

  }

}
