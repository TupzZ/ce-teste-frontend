import { IOpportunity } from './../models/opportunity.model';
import { IUser } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getUsersData()
  {
    var usersData: Array<IUser> = [];
    this.http.get('/api/get-users').subscribe((data) =>
      {
        let userData = data;
        for (const [k, v] of Object.entries(userData))
        {
          let userData = {name:v['name'], email: v['email'], phone: v['phone'], isActive: v['isActive'], agreedTerms: v['agreedTerms'], revenue: v['revenue'], opportunities: []}
          usersData.push(userData);
        }
      },
      error => console.log('Server error - ', error)
    )
    return usersData;
  };

  getUserData(user)
  {
    var usersData: Array<IUser> = [];
    var usersOpportunities: Array<IOpportunity> = [];
    this.http.get('/api/get-user/'+user).subscribe((data) =>
    {
      let userData = data[0];
      let userOpportunities = data[1];
      let userDataModel = {
        name: userData['name'],
        email: userData['email'],
        phone: userData['phone'],
        isActive: userData['isActive'],
        agreedTerms: userData['agreedTerms'],
        revenue: userData['revenue'],
      };
      usersData.push(userDataModel);
      for (const [k, v] of Object.entries(userOpportunities))
      {
        for (const [key, value] of Object.entries(v))
        {
          let userOpportunities = {
            user: user,
            name: value['name'],
            limit: value['limit'],
            interest: value['interest'],
            term: value['term'],
            isActive: value['isActive'],
          }
          usersOpportunities.push(userOpportunities);
        }
      }
      },
      error => console.log('Server error - ', error)
    )
    return [usersData, usersOpportunities];
  };
  
  getOpportunitiesData()
  {
    var usersOpportunities: Array<IOpportunity> = [];
    this.http.get('/api/get-opportunities').subscribe((data) =>
      {
      let userOpportunities = data;
        for (const [k, v] of Object.entries(userOpportunities))
        {
          for (const [key, value] of Object.entries(v))
          {
            
          for (const [ke, va] of Object.entries(value))
          {
            let userOpportunities = { user: k, name: va['name'], limit: va['limit'], interest: va['interest'], term: va['term'], isActive: va['isActive'] }
            usersOpportunities.push(userOpportunities);
          }
          }
        }
      },
      error => console.log('Server error - ', error)
    )
    
    return usersOpportunities;
  };

  getUserOpportunity(user, opportunities)
  {
    let userOpportunities = [];
    for (const [k, v] of Object.entries(opportunities))
    {
      if (v['user'] === user)
        userOpportunities.push({name: v['name'], limit: v['limit'], value: v['value'], isActive: v['isActive']});
    }
    return userOpportunities;
  }

  updateOpportunity(user, id, updatedData)
  {
    this.http.patch('/api/set-opportunity/'+user+'/'+id, updatedData).subscribe(data=>data)
  }

  getLength(obj)
  {
    let length = 0;
    for (const [k, v] of obj)
    {
      console.log(v)
      length++;
    }
  }
}
