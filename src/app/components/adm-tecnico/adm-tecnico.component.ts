import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';
import { io, Socket } from 'socket.io-client';

import { TecnicoService } from 'src/app/service/tecnico.service';
const socket = io(config.url)

@Component({
  selector: 'app-adm-tecnico',
  templateUrl: './adm-tecnico.component.html',
  styleUrls: ['./adm-tecnico.component.css']
})
export class AdmTecnicoComponent implements OnInit {

  listaTecnico: any[] = []
  fechaNacimiento = ''
  edad = 0
  nombre = ''
  buscar = ""

  constructor(private serviceTecnico: TecnicoService) {
    this.obtenerRespuesta()
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.serviceTecnico.get().subscribe((res: any) => {

      this.listaTecnico = res

    }

    )

  }

  obtenerRespuesta() {
    socket.on('creadoProducto', (data) => {
      this.getProducts()

    })
  }

  editar(item: any) {
    this.listaTecnico.forEach(i => {
      i.status = false
      if (i._id == item._id) {
        i.status = true
      }

    })


  }
  cancelar(item: any) {
    this.listaTecnico.forEach(i => {

      if (i._id == item._id) {
        i.status = false
      }

    })


  }

  guardar(item: any) {
    this.listaTecnico.forEach(i => {

      if (i._id == item._id) {

        if (this.nombre != "") {
          i.nombre = this.nombre


        }
        if (this.fechaNacimiento != '') {
          i.fechaNacimiento = this.fechaNacimiento


        }



        console.log(i)
        this.serviceTecnico.update(i).subscribe((res: any) => {
          this.getProducts()
        })





      }
    })


  }



  eliminar(id: string) {
    console.log(id)
    this.serviceTecnico.delete(id).subscribe((res: any) => {
      this.getProducts()

    })

  }

  search(event: any) {
    console.log(event)
    this.serviceTecnico.search({ nombre: event.target.value }).
      subscribe((res: any) => {
        console.log(res)
        res.forEach((i: any) => {
          i.status = false
        });
        this.listaTecnico = res
      })
  }

  findById(id: any) {
    console.log(id)
    this.serviceTecnico.findById(id).subscribe((res: any) => {
      console.log(res)
    })

  }

}
