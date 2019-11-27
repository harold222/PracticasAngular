import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  artistas: any[] = [];
  loading: boolean;

  constructor( private spoti: SpotifyService ) {
  }

  buscar(value: string) {
    this.loading = true;
    this.spoti.getArtistas(value).subscribe( (artist: any) => {
      this.artistas = artist;
      this.loading = false;
    });
  }

}
