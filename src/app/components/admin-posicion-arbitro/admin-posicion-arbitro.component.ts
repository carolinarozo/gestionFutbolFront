import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';
import { io, Socket } from 'socket.io-client';
import { ArbitroposicionService } from 'src/app/service/arbitroposicion.service';
const socket = io(config.url)

@Component({
  selector: 'app-admin-posicion-arbitro',
  templateUrl: './admin-posicion-arbitro.component.html',
  styleUrls: ['./admin-posicion-arbitro.component.css']
})
export class AdminPosicionArbitroComponent implements OnInit {

  listPosicionArbitro: any[] = []
  nomenclatura = ''
  nombre = ''
  buscar = ""

  constructor(private servicePosicionArbitro: ArbitroposicionService) {
    this.obtenerRespuesta()
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.servicePosicionArbitro.get().subscribe((res: any) => {

      this.listPosicionArbitro = res

    }

    )

  }

  obtenerRespuesta() {
    socket.on('creadoProducto', (data) => {
      this.getProducts()

    })
  }

  editar(item: any) {
    this.listPosicionArbitro.forEach(i => {
      i.status = false
      if (i._id == item._id) {
        i.status = true
      }

    })


  }
  cancelar(item: any) {
    this.listPosicionArbitro.forEach(i => {

      if (i._id == item._id) {
        i.status = false
      }

    })


  }

  guardar(item: any) {
    this.listPosicionArbitro.forEach(i => {

      if (i._id == item._id) {

        if (this.nombre != "") {
          i.nombre = this.nombre


        }
        if (this.nomenclatura != "") {
          i.nomenclatura = this.nomenclatura


        }


        console.log(i)
        this.servicePosicionArbitro.update(i).subscribe((res: any) => {
          this.getProducts()
        })





      }
    })


  }



  eliminar(id: string) {
    console.log(id)
    this.servicePosicionArbitro.delete(id).subscribe((res: any) => {
      this.getProducts()

    })

  }

  search(event: any) {
    this.servicePosicionArbitro.search({ nombre: event.target.value }).
      subscribe((res: any) => {
        res.forEach((i: any) => {
          i.status = false
        });
        this.listPosicionArbitro = res
      })
  }

  findById(id: any) {
    console.log(id)
    this.servicePosicionArbitro.findById(id).subscribe((res: any) => {
      console.log(res)
    })

  }

}
