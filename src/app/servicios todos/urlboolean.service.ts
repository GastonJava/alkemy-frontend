import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlbooleanService {

  private routerInfo: BehaviorSubject<boolean>;
  
  constructor() {
   this.routerInfo = new BehaviorSubject<boolean>(false);
  }

  getBoolean(): Observable<boolean> {
    return this.routerInfo.asObservable();
  }

  setBoolean(valorbool): void {
    this.routerInfo.next(valorbool);
  }

}