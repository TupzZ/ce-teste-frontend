import { ClientsService } from './services/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ce-test-web-app';
  clientData = {};

  constructor(private service: ClientsService)
  {
    
  }

  ngOnInit()
  {
  }
}
