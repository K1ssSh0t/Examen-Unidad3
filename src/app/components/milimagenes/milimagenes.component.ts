import { Component, inject } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas.model';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-milimagenes',
  templateUrl: './milimagenes.component.html',
  styleUrls: ['./milimagenes.component.css'],
})
export class MilimagenesComponent {
  http = inject(HttpClient);
  showFiller = false;

  peliculasPaginadas: Pelicula[] = [];
  apiKey = '11d11e056cd6edeb301d2d308c170ce3';
  baseUrl = 'https://api.themoviedb.org/3';
  pageNumber = 1;
  paginaMaximo = 50;
  desabilitadoNext = false;
  desabilitadoPrev = false;
  usuario: Usuario = {
    gender: 'Male',
    name: {
      title: 'c',
      first: 'user',
      last: 'one',
    },
    email: 'example@email.com',
    dob: {
      age: 20,
    },
    phone: '000-11-22-33',
    cell: '000-222-333',
    picture: {
      large: '',
      medium: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      thumbnail: '',
    },
    nat: 'MX',
  };

  ngOnInit() {
    this.http
      .get<Pelicula[]>(
        `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${this.pageNumber}`
      )
      .subscribe((data) => {
        //@ts-ignore
        this.peliculasPaginadas = data.results;
      });
    this.http.get<Usuario>(`https://randomuser.me/api/`).subscribe((data) => {
      //@ts-ignore
      this.usuario = data.results[0];
    });
  }

  cambiarPaginaNext() {
    if (this.pageNumber < this.paginaMaximo) {
      this.pageNumber = this.pageNumber + 1;
      this.desabilitadoPrev = false;
      this.http
        .get<Pelicula[]>(
          `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${this.pageNumber}`
        )
        .subscribe((data) => {
          //@ts-ignore
          this.peliculasPaginadas = data.results;
        });
    } else this.desabilitadoNext = true;
  }
  cambiarPaginaPrev() {
    if (this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.desabilitadoNext = false;
      this.http
        .get<Pelicula[]>(
          `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${this.pageNumber}`
        )
        .subscribe((data) => {
          //@ts-ignore
          this.peliculasPaginadas = data.results;
        });
    } else this.desabilitadoPrev = true;
  }
}
