import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personajeSeleccionado = new EventEmitter<any>();

  constructor() { }

  mostrar: boolean = true;

  miFormulario = new FormGroup({
    personaje : new FormControl('', [])
  });

  buscarPersonaje(){
    this.mostrar = false;
    const PERSONAJE = {
      nombre : this.miFormulario.value.personaje
    }
    this.personajeSeleccionado.emit(PERSONAJE);
  }

  ngOnInit(): void {
  }
}
