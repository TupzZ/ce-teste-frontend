import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit
{

  @Output() closeSidenav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sidenavClose()
  {
    this.closeSidenav.emit();
  }

}
