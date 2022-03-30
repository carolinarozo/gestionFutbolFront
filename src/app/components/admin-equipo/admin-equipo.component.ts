import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';
import { io, Socket } from 'socket.io-client';
import { EquipoService } from 'src/app/service/equipo.service';
const socket = io(config.url)

@Component({
  selector: 'app-admin-equipo',
  templateUrl: './admin-equipo.component.html',
  styleUrls: ['./admin-equipo.component.css']
})
export class AdminEquipoComponent implements OnInit {

  listaEquipo: any[] = []

  nombre = ''
  buscar = ""
  color = ''
  id_tecnico = ''
  nombreTecnico = ''
  id_futbolistas = []

  constructor(private serviceEquipo: EquipoService) {
    this.obtenerRespuesta()
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.serviceEquipo.get().subscribe((res: any) => {

      this.listaEquipo = res

    }

    )

  }

  obtenerRespuesta() {
    socket.on('creadoProducto', (data) => {
      this.getProducts()

    })
  }

  editar(item: any) {
    this.listaEquipo.forEach(i => {
      i.status = false
      if (i._id == item._id) {
        i.status = true
      }

    })


  }
  cancelar(item: any) {
    this.listaEquipo.forEach(i => {

      if (i._id == item._id) {
        i.status = false
      }

    })


  }

  guardar(item: any) {
    this.listaEquipo.forEach(i => {

      if (i._id == item._id) {

        if (this.nombre != "") {
          i.nombre = this.nombre


        }
        if (this.color != '') {
          i.color = this.color


        }
        if (this.id_tecnico != '') {
          i.id_tecnico = this.id_tecnico


        }




        console.log(i)
        this.serviceEquipo.update(i).subscribe((res: any) => {
          this.getProducts()
        })





      }
    })


  }



  eliminar(id: string) {
    console.log(id)
    this.serviceEquipo.delete(id).subscribe((res: any) => {
      this.getProducts()

    })

  }

  search(event: any) {
    console.log(event)
    this.serviceEquipo.search({ nombre: event.target.value }).
      subscribe((res: any) => {
        console.log(res)
        res.forEach((i: any) => {
          i.status = false
        });
        this.listaEquipo = res
      })
  }

  findById(id: any) {
    console.log(id)
    this.serviceEquipo.findById(id).subscribe((res: any) => {
      console.log(res)
    })

  }

}
