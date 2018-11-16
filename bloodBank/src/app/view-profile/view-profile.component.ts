import { BloodBankAPIService } from './../blood-bank-api.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  loggedUser:User = {id:0,userName:'',passWord:'',mobileNumber:0,email:''};
  editable = true;
  constructor(private service:BloodBankAPIService) { }

  ngOnInit() {

        this.service.getProfile('india').subscribe(resp => {
          this.loggedUser = resp[0];
          console.log(resp);
        });
  }

  makeEditable(){
    this.editable = false;
  }
}
