import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];
  http = inject(HttpClient);
  showFiller = false;
  usuariosPaginados: Usuario[] = [];
  primeraPagina: Usuario[] = [];

  pageNumber = 1;
  paginaMaximo = 5;
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

  Paginator(items: any, page: number, per_page: number) {
    var page = page || 1,
      per_page = per_page || 10,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page),
      total_pages = Math.ceil(items.length / per_page);
    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems,
    };
  }

  ngOnInit() {
    this.http
      .get<Usuario[]>(`https://randomuser.me/api/?results=50`)
      .subscribe((data) => {
        //@ts-ignore
        this.usuariosPaginados = data.results;
        //@ts-ignore
        this.usuarios = this.Paginator(this.usuariosPaginados, 1, 10).data;
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
      this.usuarios = this.Paginator(
        this.usuariosPaginados,
        this.pageNumber,
        10
      ).data;
    } else this.desabilitadoNext = true;
  }

  cambiarPaginaPrev() {
    if (this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.desabilitadoNext = false;
      this.usuarios = this.Paginator(
        this.usuariosPaginados,
        this.pageNumber,
        10
      ).data;
    } else this.desabilitadoPrev = true;
  }
}
