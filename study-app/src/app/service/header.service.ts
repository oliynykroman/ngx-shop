import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/index";



@Injectable({
  providedIn: 'root'
})

export class HeaderService {
  buttonState: boolean = true;
  public BucketButtonState = new BehaviorSubject(this.buttonState);

  setBucketState(state:boolean){
    this.BucketButtonState.next(state);
  }

  constructor() {
  }
}
