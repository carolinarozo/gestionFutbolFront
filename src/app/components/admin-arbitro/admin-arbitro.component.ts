import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';
import { io, Socket } from 'socket.io-client';
import { ArbitroService } from 'src/app/service/arbitro.service';


const socket = io(config.url)

@Component({
  selector: 'app-admin-arbitro',
  templateUrl: './admin-arbitro.component.html',
  styleUrls: ['./admin-arbitro.component.css']
})
export class AdminArbitroComponent implements OnInit {
  listaArbitro: any[] = []
  fechaNacimiento = ''
  edad = 0
  nombre = ''
  buscar = ""

  constructor(private serviceArbitro: ArbitroService) {
    this.obtenerRespuesta()
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.serviceArbitro.get().subscribe((res: any) => {

      this.listaArbitro = res

    }

    )

  }

  obtenerRespuesta() {
    socket.on('creadoProducto', (data) => {
      this.getProducts()

    })
  }

  editar(item: any) {
    this.listaArbitro.forEach(i => {
      i.status = false
      if (i._id == item._id) {
        i.status = true
      }

    })


  }
  cancelar(item: any) {
    this.listaArbitro.forEach(i => {

      if (i._id == item._id) {
        i.status = false
      }

    })


  }

  guardar(item: any) {
    this.listaArbitro.forEach(i => {

      if (i._id == item._id) {

        if (this.nombre != "") {
          i.nombre = this.nombre


        }
        if (this.fechaNacimiento != '') {
          i.fechaNacimiento = this.fechaNacimiento


        }



        console.log(i)
        this.serviceArbitro.update(i).subscribe((res: any) => {
          this.getProducts()
        })





      }
    })


  }



  eliminar(id: string) {
    console.log(id)
    this.serviceArbitro.delete(id).subscribe((res: any) => {
      this.getProducts()

    })

  }

  search(event: any) {
    console.log(event)
    this.serviceArbitro.search({ nombre: event.target.value }).
      subscribe((res: any) => {
        console.log(res)
        res.forEach((i: any) => {
          i.status = false
        });
        this.listaArbitro = res
      })
  }

  findById(id: any) {
    console.log(id)
    this.serviceArbitro.findById(id).subscribe((res: any) => {
      console.log(res)
    })

  }

}
