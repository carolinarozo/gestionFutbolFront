import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ArbitroComponent } from './components/arbitro/arbitro.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { PosicionArbitroComponent } from './components/posicion-arbitro/posicion-arbitro.component';
import { PosicionComponent } from './components/posicion/posicion.component';
import { TecnicoComponent } from './components/tecnico/tecnico.component';
import { WindowsEditarArbitroComponent } from './components/windows-editar-arbitro/windows-editar-arbitro.component';
import { WindowsEditarJugadorComponent } from './components/windows-editar-jugador/windows-editar-jugador.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'windowsjugador', component: WindowsEditarJugadorComponent,
        children: [{
          path: 'jugador', component: JugadorComponent
        },
        {
          path: 'posicion', component: PosicionComponent
        }
        ]
      },

      {
        path: 'tecnico', component: TecnicoComponent

      },
      {
        path: 'windowsarbitro', component: WindowsEditarArbitroComponent,
        children: [
          {
            path: 'arbitro', component: ArbitroComponent
          },
          {
            path: 'posicionA', component: PosicionArbitroComponent
          }

        ]

      },
      {
        path: 'equipo', component: EquipoComponent

      }

    ]
  },
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: '**', redirectTo: "admin"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
