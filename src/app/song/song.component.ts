import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetApiService } from  '../get-api.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  song;

  constructor(private api:GetApiService) { }

  ngOnInit(): void {
    this.api.getSong('3756041').subscribe((data =>{
      this.song = data.response.song;
      console.log("get api data", this.song);
    }));
  }

}
