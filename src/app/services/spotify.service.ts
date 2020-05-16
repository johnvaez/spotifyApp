import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNuevosLanzamientos() {

    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQBH3GVgrgA4-W_kI35wQeLeMmtErnDB_3ETJxLNdhYTaXtM0TgSGeWuzKW__iMtdhNvES6k0dCun2xR7m0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
