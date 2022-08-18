import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  visible: string ="gestion-empresas";
  visibleHijo: string = '';
  constructor() { }

  ngOnInit(): void {
  }


  verGestionEmpresas(){
    this.visible = 'gestion-empresas'
    
  }

  verPlanes(){
    this.visible = 'gestion-planes'
  }

  verPlantillas(){
    this.visible = 'gestion-plantillas'
  }

  verUsuarios(){
    this.visible = 'gestion-usuarios'
  }


}
