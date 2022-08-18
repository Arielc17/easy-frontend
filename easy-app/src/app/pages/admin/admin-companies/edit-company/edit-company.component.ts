import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  user: any;
  contrasena =  new FormControl('');
  @Input() idUser: string = ''
  @Output() visible2 = new EventEmitter<string>();

  
  formularioUser = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required, Validators.email]),
    tipoUsuario: new FormControl('',[Validators.required]),
    estado: new FormControl('',[Validators.required])
  });

  formularioEmpresa = new FormGroup({
    nombreEmpresa: new FormControl('',[Validators.required]),
    estadoEmpresa: new FormControl('',[Validators.required]),
  });


  


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    this.usersService.getUser(this.idUser).subscribe(
      res=>{
        console.log(res)
        this.user = res
        this.formularioUser.setValue({
          nombre: this.user.nombre.toString(),
          apellidos: this.user.apellidos.toString(),
          correo: this.user.correo.toString(),
          tipoUsuario: this.user.tipoUsuario.toString(),
          estado: this.user.estado.toString()
        });

        if (this.user.tipoUsuario == 'Empresa') {
          this.formularioEmpresa.setValue({
            nombreEmpresa: this.user.empresa.nombreEmpresa,
            estadoEmpresa: this.user.empresa.estadoEmpresa
          })
        }
        console.log('aqui a ver que pedos',this.formularioUser.value)

      },
      error=>{
        console.log(error)
      }
    )
  

  }

  guardarCambios(){
    
    console.log('primero esto dog',this.formularioUser.value)
    console.log('valida esto',this.formularioUser.value.tipoUsuario)
    
    this.user = this.formularioUser.value

    console.log('va por aqui 1231', this.user)

    if (this.formularioUser.value.tipoUsuario =='Empresa') {

      this.user.empresa = this.formularioEmpresa.value
      
        console.log('Aqui mi dog',this.user )
    }
    else{
      this.user.empresa = ""
    }
    
   
    
    if (this.contrasena.value != '') {
      this.user.contrasena =this.contrasena
    }
    this.contrasena.setValue('');
    this.usersService.updateUser(this.user, this.idUser).subscribe(
      res=>{
        console.log(res)
        this.user = res
        
        this.visible2.emit('tabla');
      },
      error=>{
        console.log(error)
      }
    )
  }

  cancelarCambios(){

    this.visible2.emit('tabla');
  }

  isValid(){
    if (this.formularioUser.value.tipoUsuario =='Empresa') {
      return this.formularioUser.valid && this.formularioEmpresa.valid
    }
    return this.formularioUser.valid
  }
}
