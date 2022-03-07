import { Component, OnInit } from '@angular/core';
import { PosicionServiceService } from 'src/app/service/posicion-service.service';
import { config } from 'src/app/config/config';
import { io, Socket } from 'socket.io-client';
const socket = io(config.url)

@Component({
  selector: 'app-adm-posicion',
  templateUrl: './adm-posicion.component.html',
  styleUrls: ['./adm-posicion.component.css']
})
export class AdmPosicionComponent implements OnInit {
  listPosicion: any[] = []
  nomenclatura = ''
  nombre = ''
  buscar = ""

  constructor(private servicePosicion: PosicionServiceService) {
    this.obtenerRespuesta()
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.servicePosicion.get().subscribe((res: any) => {

      this.listPosicion = res

    }

    )

  }

  obtenerRespuesta() {
    socket.on('creadoProducto', (data) => {
      this.getProducts()

    })
  }

  editar(item: any) {
    this.listPosicion.forEach(i => {
      i.status = false
      if (i._id == item._id) {
        i.status = true
      }

    })


  }
  cancelar(item: any) {
    this.listPosicion.forEach(i => {

      if (i._id == item._id) {
        i.status = false
      }

    })


  }

  guardar(item: any) {
    this.listPosicion.forEach(i => {

      if (i._id == item._id) {

        if (this.nombre != "") {
          i.nombre = this.nombre


        }
        if (this.nomenclatura != "") {
          i.nomenclatura = this.nomenclatura


        }


        console.log(i)
        this.servicePosicion.update(i).subscribe((res: any) => {
          this.getProducts()
        })





      }
    })


  }



  eliminar(id: string) {
    console.log(id)
    this.servicePosicion.delete(id).subscribe((res: any) => {
      this.getProducts()

    })

  }

  search(event: any) {
    this.servicePosicion.search({ nombre: event.target.value }).
      subscribe((res: any) => {
        res.forEach((i: any) => {
          i.status = false
        });
        this.listPosicion = res
      })
  }

  findById(id: any) {
    console.log(id)
    this.servicePosicion.findById(id).subscribe((res: any) => {
      console.log(res)
    })

  }

}
