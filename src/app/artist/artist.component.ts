import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist;

  constructor(private api: GetApiService) { }

  ngOnInit(): void {
    /*this.api.apiCall("artists/16775").subscribe((data => {
      this.artist = data.response.artist;
      console.log("get api data", this.artist);
    }));*/
  }

}
