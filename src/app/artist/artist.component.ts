import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist;
  songs;
  id;

  constructor(private api: GetApiService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['artistId'];
    this.api.getArtist(this.id).subscribe((data => {
      this.artist = data;
    }));
    this.api.getArtistSongs(this.id).subscribe((data => {
      this.songs = data;
      console.log("get api data", this.artist);
    }));
  }

  //isLink(val): boolean { return typeof val === 'object'; }
}
