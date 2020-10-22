import { Router } from '@angular/router';
import { Component, OnInit, } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  
  usersInfo: any ;
  usersOpportunities: any ;
  usersLength = 0;
  opportunitiesLength = 0;
  selectedOpportunities = [];
  userSelected = '';

  constructor(private service: ClientsService, private router:Router)
  {
    
  }

  ngOnInit()
  {
    this.getDataFromApi();
    this.service.getUserData('cliente1@example.com');
  }

  toggleSelectOpportunities(user: string): void
  {
    this.selectedOpportunities = this.service.getUserOpportunity(user, this.usersOpportunities)
  }

  toggleSelectUser(user: string): void
  {
    this.userSelected = user;
    this.toggleSelectOpportunities(this.userSelected);
  }

  goToClientDetails(id) {
    this.router.navigate(['/clientes', id]);
  }

  toggleResetSelectUser(): void
  {
    this.userSelected = '';    
    console.log(this.usersOpportunities);
  }

  getDataFromApi()
  {
    this.usersInfo = this.service.getUsersData();
    this.usersOpportunities = this.service.getOpportunitiesData();
    this.service.getLength(this.usersInfo);
  }
}
