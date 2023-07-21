import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaimagenesComponent } from './components/listaimagenes/listaimagenes.component';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MilimagenesComponent } from './components/milimagenes/milimagenes.component';

const routes: Routes = [
  //{ path: '', title: 'Home', component: LoginComponent },
  {
    path: 'principal',
    title: 'Pagina Principal',
    component: ListaimagenesComponent,
  },
  { path: 'usuarios', title: 'Usuarios', component: UsuariosComponent },
  {
    path: 'full-list',
    title: 'Lista de Todas las Peliculas',
    component: MilimagenesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
