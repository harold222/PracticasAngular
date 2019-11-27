import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string ) {
    const url =  `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDvr48_gvZMI4U0CKXjELM4nviZclIRr-G8VZgAM7KGowHv7F57zBewa7EyU4I9dXbkfVTzvM7Mo7tPEgk'
    });

    return this.http.get(url, {headers});
  }

  getNuevasCanciones() {
    return this.getQuery('browse/new-releases').pipe( map(
      data => data['albums'].items
    ));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map(
      data => data['artists'].items
    ));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map(
      data => data['tracks']
    ));
  }

}
