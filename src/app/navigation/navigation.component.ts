import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {NavigationService} from './navigation.service';
import {MatSidenav} from '@angular/material/sidenav';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  @ViewChild("drawer") sidenav: MatSidenav;
  private menuClickSubscription: Subscription;
  constructor(private navigationService: NavigationService) {}

  ngAfterViewInit(){
    this.menuClickSubscription = this.navigationService.navigationMenuClick$.subscribe(() => {
      this.sidenav.toggle();
    });
  }
  ngOnDestroy(): void {
    this.menuClickSubscription.unsubscribe();
  }
}
