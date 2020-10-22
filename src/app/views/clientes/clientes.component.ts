import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit
{
  
  usersInfo: any ;
  usersOpportunities: any ;
  usersQtd = 0;
  opportunitiesQtd = 0;
  selectedOpportunities = [];
  userSelected = '';

  header = ['Nome', 'E-mail', 'Telefone', 'Ativo', 'Termos', 'Info'];
  rowClasses = ['nome', 'email', 'telefone', 'ativo', 'termos', 'info']

  constructor(private service: ClientsService, private router:Router)
  {
    
  }

  ngOnInit()
  {
    this.getDataFromApi();
  }

  goToClientDetails(id) {
    this.router.navigate(['/clientes', id]);
  }

  getDataFromApi()
  {
    this.usersInfo = this.service.getUsersData();
    this.usersOpportunities = this.service.getOpportunitiesData();
  }
}
