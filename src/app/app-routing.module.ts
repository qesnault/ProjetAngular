import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongComponent } from './song/song.component';
import { ArtistComponent } from './artist/artist.component'
import { ListeComponent } from './liste/liste.component'

const routes: Routes = [
  { path: 'song/:songId', component: SongComponent },
  { path: 'artist/:artistId', component:ArtistComponent },
  { path: 'results', component:ListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
