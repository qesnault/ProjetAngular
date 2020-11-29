import { Component, OnInit } from '@angular/core';
import { GetApiService } from  '../get-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs = [];
  artists =[];

  songId = ['2931547','3399990','2685480','2376891','3315890','4534710'];
  artistsId = ['45855','130','19217','13585','315143','630470'];

  constructor(private api:GetApiService) { }

  ngOnInit(): void {

    for (const song of this.songId) {
      this.getSong(song);
    }

    for (const artist of this.artistsId) {
      this.getArtist(artist);
    }
    console.log(this.artists)

  }

  getSong(id):void{
    this.api.getSong(id).subscribe((data =>{
      this.songs.push(data.response.song);
    }));

  }

  getArtist(id):void{
    this.api.getArtist(id).subscribe((data =>{
      this.artists.push(data.response.artist);
    }));
  }
}
