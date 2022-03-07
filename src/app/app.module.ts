import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdmComponent } from './components/adm/adm.component';
import { AdmJugadorComponent } from './components/adm-jugador/adm-jugador.component';
import { AdmPosicionComponent } from './components/adm-posicion/adm-posicion.component';
import { AdmTecnicoComponent } from './components/adm-tecnico/adm-tecnico.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminArbitroComponent } from './components/admin-arbitro/admin-arbitro.component';
import { AdminEquipoComponent } from './components/admin-equipo/admin-equipo.component';
import { AdminPosicionArbitroComponent } from './components/admin-posicion-arbitro/admin-posicion-arbitro.component';
import { ArbitroComponent } from './components/arbitro/arbitro.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { PosicionComponent } from './components/posicion/posicion.component';
import { PosicionArbitroComponent } from './components/posicion-arbitro/posicion-arbitro.component';
import { TecnicoComponent } from './components/tecnico/tecnico.component';
import { WindowsEditarArbitroComponent } from './components/windows-editar-arbitro/windows-editar-arbitro.component';
import { WindowsEditarJugadorComponent } from './components/windows-editar-jugador/windows-editar-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AdmComponent,
    AdmJugadorComponent,
    AdmPosicionComponent,
    AdmTecnicoComponent,
    AdminComponent,
    AdminArbitroComponent,
    AdminEquipoComponent,
    AdminPosicionArbitroComponent,
    ArbitroComponent,
    EquipoComponent,
    JugadorComponent,
    PosicionComponent,
    PosicionArbitroComponent,
    TecnicoComponent,
    WindowsEditarArbitroComponent,
    WindowsEditarJugadorComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
