import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  userStatus: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  changeUserStatus(currentMessage: string) {

     this.userStatus.next(currentMessage);
  }

}
