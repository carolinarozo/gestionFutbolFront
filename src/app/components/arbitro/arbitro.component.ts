import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArbitroService } from 'src/app/service/arbitro.service';
import { WebsocketService } from 'src/app/service/websocket.service.service';

@Component({
  selector: 'app-arbitro',
  templateUrl: './arbitro.component.html',
  styleUrls: ['./arbitro.component.css']
})
export class ArbitroComponent implements OnInit {


  form: FormGroup
  nombre: AbstractControl
  fechaNacimiento: AbstractControl

  sub = false

  constructor(private fb: FormBuilder, private serviceArbitro: ArbitroService, private websoket: WebsocketService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],

    })
    this.nombre = this.form.controls['nombre']
    this.fechaNacimiento = this.form.controls['fechaNacimiento']

  }

  ngOnInit(): void {
  }

  get getForm() {
    return this.form.controls
  }

  sendDatos() {
    this.sub = true
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value)
    this.serviceArbitro.sendDatos(this.form.value).subscribe((res: any) => {
      if (res.status) {

        this.websoket.saveNewProducto(this.form.value)
      }

    })


  }

}
