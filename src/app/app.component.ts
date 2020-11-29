import { Component } from '@angular/core';
import { GetApiService } from  './get-api.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-angular';
  constructor(private api:GetApiService,private router: Router)
  {

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data =>{
      console.log("get api data", data);
    }));
  }

  onSearch(){

    var search =$('#searchInput')[0].value
    this.router.navigate(['/results',search]);
  }
}
