import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from 'src/app/service/equipo.service';
import { JugadoresService } from 'src/app/service/jugadores.service';
import { config } from 'src/app/config/config';
import { WebsocketService } from 'src/app/service/websocket.service.service';
import { io, Socket } from 'socket.io-client';
import { PosicionServiceService } from 'src/app/service/posicion-service.service';
import { TecnicoService } from 'src/app/service/tecnico.service';
const socket = io(config.url)

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  form: FormGroup
  nombre: AbstractControl
  color: AbstractControl


  listaJugador: any[] = []//lista para cargar desde la base de datos
  listaTecnico: any[] = []//lista para cargar desde la base de dato


  listaFutbolistas: any[] = []
  futbolista = ''
  tecnico = ''

  sub = false

  nombreFutbolistas: any[] = []






  cargarTecnico() {//seleccionar futbolistas
    let nombre1
    this.listaJugador.forEach(i => {
      if (i._id == this.futbolista) {
        nombre1 = i.nombre
        console.log(nombre1)
      }
    })
    this.listaFutbolistas.push(this.futbolista)
    this.nombreFutbolistas.push(nombre1)
    console.log(this.listaFutbolistas)



    this.futbolista = ''

  }

  cargarFutbolistas() {//seleccionar futbolistas
    let nombre1
    this.listaJugador.forEach(i => {
      if (i._id == this.futbolista) {
        nombre1 = i.nombre
        console.log(nombre1)
      }
    })
    this.listaFutbolistas.push(this.futbolista)
    this.nombreFutbolistas.push(nombre1)
    console.log(this.listaFutbolistas)



    this.futbolista = ''

  }

  eliminar(item: any) {//eliminar jugador
    console.log(item)
    this.nombreFutbolistas = this.nombreFutbolistas.filter((elemento) => {
      return elemento !== item
    })
    console.log(this.nombreFutbolistas)
  }



  constructor(private fb: FormBuilder, private serviceEquipo: EquipoService, private websoket: WebsocketService, private jugadorService: JugadoresService, private TecnicoService: TecnicoService) {
    this.obtenerRespuesta()
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      color: ['', Validators.required],
      id_tecnico: [this.tecnico],
      id_futbolistas: [this.listaFutbolistas]
    })
    this.nombre = this.form.controls['nombre']
    this.color = this.form.controls['color']


  }


  ngOnInit(): void {
    this.getProducts()

  }

  getProducts() {//cargar datos 
    this.jugadorService.get().subscribe((res: any) => {
      console.log(res)

      this.listaJugador = res

    })

    this.TecnicoService.get().subscribe((res: any) => {
      console.log(res)
      this.listaTecnico = res
    })



  }

  obtenerRespuesta() {//actualizacion instantanea
    socket.on('creadoProducto', (data) => {
      this.getProducts()


    })
  }
  get getForm() {
    return this.form.controls
  }



  sendDatos() {//envio de datos a db equipo
    console.log(this.form.controls)


    this.sub = true
    if (this.form.invalid) {
      return console.log('fallo')
    }
    console.log(this.form.value)
    this.serviceEquipo.sendDatos(this.form.value).subscribe((res: any) => {
      if (res.status) {

        this.websoket.saveNewProducto(this.form.value)
      }

    })


  }

}
