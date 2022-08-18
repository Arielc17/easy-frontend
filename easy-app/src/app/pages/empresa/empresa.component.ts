import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  visible: string ="gestion-empresas";
  visibleHijo: string = '';
  constructor() { }

  ngOnInit(): void {
  }


  verAdminImagenes(){
    this.visible = 'gestion-imagenes'
    
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
