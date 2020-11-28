import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  header: Object = {
    "headers": {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "a7614406e2msh59ee1345507dfb4p186de0jsn2bf93e973b3a",
    }
  }

  fetchedArtirts: Object[] = []

  constructor(
    private http:HttpClient
  ) { }

  apiCall()
  {
    return this.http.get('https://genius.p.rapidapi.com/', this.header);
  }

  getSong(id:string){
    return this.http.get('https://genius.p.rapidapi.com/songs/'+id, this.header);
  }

  getSearch(value:string){
    return this.http.get('https://genius.p.rapidapi.com/search?q='+value, this.header);
  }
}
