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
  btnText = 'Add';
  request: BloodRequest ={
    id: 0,
    reqGroup: '',
    reqDate: new Date(),
    reqHospital: 'Vijaya'
  };
  editPos: number;

  constructor(private service: BloodBankAPIService) { }

  ngOnInit() {

    this.service.getAllRequests().subscribe(resp => this.requestList = resp);
  }

  submit() {

     if(this.btnText === 'Add'){

    this.service.addRequest(this.request).subscribe(response => {

      this.requestList.push(response);
    });
  } else {

     this.service.updateRequest(this.request).subscribe(response => {

       this.requestList[this.editPos] = response;
     });
  }

  }

  update(request: BloodRequest){

    this.editPos = this.requestList.indexOf(request);

    this.btnText = 'UPDATE';

    this.request = request;


  }

  remove(request: BloodRequest) {

    const idxPos = this.requestList.indexOf(request);

    this.service.removeRequest(request).subscribe(resp => {

       this.requestList.splice(idxPos, 1);
    });

  }

}
