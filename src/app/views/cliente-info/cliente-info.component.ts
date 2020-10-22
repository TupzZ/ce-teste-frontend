import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.scss']
})
export class ClienteInfoComponent implements OnInit
{
  userInfo: any ;
  userOpportunities: any ;

  constructor(private route: ActivatedRoute, private service: ClientsService) { }

  ngOnInit(): void
  {
    this.getDataFromApi(this.route.snapshot.paramMap.get('email'));
  }

  getDataFromApi(email)
  {
    [this.userInfo, this.userOpportunities] = this.service.getUserData(email);
  }

  toggleIsActive(user, id)
  {
    this.service.updateOpportunity(user, id, this.userOpportunities);
    this.getDataFromApi(this.route.snapshot.paramMap.get('email'));
  }
}
