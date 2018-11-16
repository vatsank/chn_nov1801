import { ComponentInteractionService } from './../component-interaction.service';
import { BloodBankAPIService } from './../blood-bank-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BloodDonar } from '../bloodDonar';
import { Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {History} from '../history';
@Component({
  selector: 'app-show-donars',
  templateUrl: './show-donars.component.html',
  styleUrls: ['./show-donars.component.css']
  })
export class ShowDonarsComponent implements OnInit , OnDestroy{

  donarList: BloodDonar[];
  dummy: Object;
  subs: Subscription;
  details: History[];
  constructor(private service: BloodBankAPIService,private active: ActivatedRoute , private msgService:ComponentInteractionService) { }

  ngOnInit() {

        // this.msgService.changeUserStatus('HideHeading');

     this.active.params.subscribe(param => {

      const donarId = param['id'];

       if(donarId !== undefined){

         this.service.findDonorHistory(donarId).subscribe(resp =>{
            this.details = resp;
         });
       }
     });


   this.subs = this.service.findAllDonors().subscribe(data => this.donarList = data,
                               err => console.log(err),
                               () => console.log('completed'));

      // this.service.findAllDonorsWithPromise().then(data => this.dummy = data);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
