import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  searchString: string = "";

  searchResult;

  constructor(private api: GetApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['search']) {
        this.searchString = params['search'];
      } else {
        this.searchString = "vald"
      }
      console.log("get", this.searchString)
    });
    this.api.apiCall("search?q=" + this.searchString).subscribe((data => {
      this.searchResult = data.response.hits;
      console.log("get api data", this.searchResult);
    }));
  }

}
