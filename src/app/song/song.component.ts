import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetApiService } from  '../get-api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  song;
  id;

  constructor(private api:GetApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['songId'];
    this.api.getSong(this.id).subscribe((data =>{
      this.song = data.response.song;
    }));
  }

}
