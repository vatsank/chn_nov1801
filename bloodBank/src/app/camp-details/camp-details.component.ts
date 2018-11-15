import { FutureCampsComponent } from './../future-camps/future-camps.component';
import { PastCampsComponent } from './../past-camps/past-camps.component';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.css']
})
export class CampDetailsComponent implements OnInit , AfterViewInit {

   @ViewChild(PastCampsComponent) past: PastCampsComponent;
   @ViewChild(FutureCampsComponent) future: FutureCampsComponent;
  futureCamp: string[];
  pastCamps: string[];


   constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.futureCamp  =  this.future.getDetails('dec', 2018);
    this.pastCamps = this.past.getDetails('sep', 2018);
    this.changeDetector.detectChanges();
  }

}
