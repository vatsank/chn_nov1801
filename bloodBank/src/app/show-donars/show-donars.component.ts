import { BloodBankAPIService } from './../blood-bank-api.service';
import { Component, OnInit } from '@angular/core';
import { BloodDonar } from '../bloodDonar';

@Component({
  selector: 'app-show-donars',
  templateUrl: './show-donars.component.html',
  styleUrls: ['./show-donars.component.css']
  })
export class ShowDonarsComponent implements OnInit {

  donarList: BloodDonar[];
  constructor(private service: BloodBankAPIService) { }

  ngOnInit() {

    this.service.findAllDonors().
                     subscribe(data => this.donarList = data,
                               err => console.log(err),
                               () => console.log('completed'));

     // this.service.findAllDonorsWithPromise().then(data => this.donarList = data);
  }

}
