import { Component, inject } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas.model';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-listaimagenes',
  templateUrl: './listaimagenes.component.html',
  styleUrls: ['./listaimagenes.component.css'],
})
export class ListaimagenesComponent {
  peliculas: Pelicula[] = [];
  http = inject(HttpClient);
  showFiller = false;
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
        `https://api.themoviedb.org/3/movie/popular?api_key=11d11e056cd6edeb301d2d308c170ce3`
      )
      .subscribe((data) => {
        //@ts-ignore
        this.peliculas = data.results;
      });

    this.http.get<Usuario>(`https://randomuser.me/api/`).subscribe((data) => {
      //@ts-ignore
      this.usuario = data.results[0];
    });
  }
}
