import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  searchResult;

  constructor(private api: GetApiService) { }

  ngOnInit(): void {
    this.api.apiCall("search?q=Kendrick%20Lamar").subscribe((data => {
      this.searchResult = data.response.hits;
      console.log("get api data", this.searchResult);
    }));
  }

}
