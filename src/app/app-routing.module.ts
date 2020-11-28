import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component'
import { ListeComponent } from './liste/liste.component'

const routes: Routes = [
  { path: 'artist', component:ArtistComponent },
  { path: 'results', component:ListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
