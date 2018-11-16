import { ComponentInteractionService } from './../component-interaction.service';
import { BloodBankAPIService } from './../blood-bank-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BloodDonar } from '../bloodDonar';
import { Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-donars',
  templateUrl: './show-donars.component.html',
  styleUrls: ['./show-donars.component.css']
  })
export class ShowDonarsComponent implements OnInit , OnDestroy{

  donarList: BloodDonar[];
  dummy: Object;
  subs: Subscription;
  details: Object[];
  constructor(private service: BloodBankAPIService, private msgService:ComponentInteractionService) { }

  ngOnInit() {

         this.msgService.changeUserStatus('HideHeading');

   this.subs = this.service.findAllDonors().subscribe(data => this.donarList = data,
                               err => console.log(err),
                               () => console.log('completed'));

      // this.service.findAllDonorsWithPromise().then(data => this.dummy = data);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
