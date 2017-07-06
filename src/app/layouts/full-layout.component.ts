import { Component, OnInit } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']

})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean = false;
  public status: { isopen: boolean } = {isopen: false};
  protected showMenu: boolean;

  public toasterConfig: ToasterConfig;

  constructor(private router: Router) {}

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      this.showMenu = true;
    });
  }
}
