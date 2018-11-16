import { ManageRequestComponent } from './manage-request/manage-request.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate , CanDeactivate {
  component: Object;
  route: ActivatedRouteSnapshot;

  canDeactivate(){
        return confirm('are you sure');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

     const status = sessionStorage.getItem('logged');

      let resp = false;
     if(status === 'yes') {
       resp =  true;
      }

      return resp;

  }
}
