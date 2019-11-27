import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{

  artista: any = {};
  loading: boolean;
  Track: any[] = [];

  constructor( private router: ActivatedRoute, private spoti: SpotifyService ) {
    this.loading = true;
    router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spoti.getArtista(id).subscribe( artista => {
      // console.log(artista);
      this.artista = artista;
      this.loading = false;

    });
  }

  getTopTracks(id: string) {
    this.spoti.getTracks(id).subscribe( top => {
      console.log(top);
      this.Track = top;
    });
  }

}
