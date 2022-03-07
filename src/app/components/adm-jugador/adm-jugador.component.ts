import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';
import { io, Socket } from 'socket.io-client';
import { JugadoresService } from 'src/app/service/jugadores.service';
const socket = io(config.url)

@Component({
  selector: 'app-adm-jugador',
  templateUrl: './adm-jugador.component.html',
  styleUrls: ['./adm-jugador.component.css']
})
export class AdmJugadorComponent implements OnInit {

  listaJugador: any[] = []
  fechaNacimiento = ''
  edad = 0
  nombre = ''
  buscar = ""

  constructor(private serviceJugador: JugadoresService) {
    this.obtenerRespuesta()
  }

  ngOnInit(): void {
    this.getProducts()
    console.log(this.getProducts())
  }

  getProducts() {
    this.serviceJugador.get().subscribe((res: any) => {

      this.listaJugador = res

    }

    )

  }

  obtenerRespuesta() {
    socket.on('creadoProducto', (data) => {
      this.getProducts()

    })
  }

  editar(item: any) {
    this.listaJugador.forEach(i => {
      i.status = false
      if (i._id == item._id) {
        i.status = true
      }

    })


  }
  cancelar(item: any) {
    this.listaJugador.forEach(i => {

      if (i._id == item._id) {
        i.status = false
      }

    })


  }

  guardar(item: any) {
    this.listaJugador.forEach(i => {

      if (i._id == item._id) {

        if (this.nombre != "") {
          i.nombre = this.nombre


        }
        if (this.fechaNacimiento != '') {
          i.fechaNacimiento = this.fechaNacimiento


        }



        console.log(i)
        this.serviceJugador.update(i).subscribe((res: any) => {
          this.getProducts()
        })





      }
    })


  }



  eliminar(id: string) {
    console.log(id)
    this.serviceJugador.delete(id).subscribe((res: any) => {
      this.getProducts()

    })

  }

  search(event: any) {
    console.log(event)
    this.serviceJugador.search({ nombre: event.target.value }).
      subscribe((res: any) => {
        console.log(res)
        res.forEach((i: any) => {
          i.status = false
        });
        this.listaJugador = res
      })
  }

  findById(id: any) {
    console.log(id)
    this.serviceJugador.findById(id).subscribe((res: any) => {
      console.log(res)
    })

  }

}
