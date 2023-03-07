import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapitulosService } from 'src/app/services/capitulos.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() datosPersonaje: any;

  listaCapitulos: any[] = []; 

  constructor(private _capitulos: CapitulosService, private _router: Router) { }

  ngOnInit(): void {
  }

  buscarCapitulos(personaje: any){
    this._capitulos.datosCapitulos = this.datosPersonaje.filter((x:any) => x.id === personaje.id)[0].episode;
    this._router.navigate(['/capitulos'])
  }

}
