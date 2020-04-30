import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationMenuComponentClick = new Subject<void>();

  get navigationMenuClick$(): Observable<void> {
    return this.navigationMenuComponentClick.asObservable();
  }

  menuClick(){
    this.navigationMenuComponentClick.next();
  }
}
