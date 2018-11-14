import { BloodBankAPIService } from './../blood-bank-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BloodDonar } from '../bloodDonar';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-show-donars',
  templateUrl: './show-donars.component.html',
  styleUrls: ['./show-donars.component.css']
  })
export class ShowDonarsComponent implements OnInit , OnDestroy{

  donarList: BloodDonar[];
  dummy: Object;
  subs: Subscription;
  constructor(private service: BloodBankAPIService) { }

  ngOnInit() {

   this.subs = this.service.findAllDonors().subscribe(data => this.donarList = data,
                               err => console.log(err),
                               () => console.log('completed'));

      // this.service.findAllDonorsWithPromise().then(data => this.dummy = data);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
