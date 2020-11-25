import { Component } from '@angular/core';
import { GetApiService } from  './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-angular';
  constructor(private api:GetApiService)
  {

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data =>{
      console.log("get api data", data);
    }));
  }
}
