import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {

    this.spotify.getNuevosLanzamientos().subscribe(data => {
     this.nuevasCanciones = data['albums']['items'];
    });
  }

}
