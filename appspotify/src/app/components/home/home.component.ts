import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  MensajeError: string;
  constructor( private spoti: SpotifyService ) {
    this.loading = true;
    this.error = false;

    this.spoti.getNuevasCanciones().subscribe( (canciones: any) => {
      this.nuevasCanciones =  canciones;
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.MensajeError = errorServicio.error.error.message;
    });

  }

  ngOnInit() {
  }

}
