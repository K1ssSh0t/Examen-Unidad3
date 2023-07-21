import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas.model';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css'],
})
export class ImagenesComponent {
  @Input() pelicula!: Pelicula;
}
