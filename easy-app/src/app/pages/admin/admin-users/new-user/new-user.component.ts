import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userNew: any;
  contrasena: string = '';
  @Input() idUser: string = '';
  @Input() isLogin: number = 0;
  @Output() visible2 = new EventEmitter<string>();
  @Output() login = new EventEmitter<any>();

  formularioUser = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required, Validators.email]),
    tipoUsuario: new FormControl('',[Validators.required]),
    estado: new FormControl('',[Validators.required]),
    contrasena: new FormControl('',[Validators.required])
  });

  formularioEmpresa = new FormGroup({
    nombreEmpresa: new FormControl('',[Validators.required]),
    estadoEmpresa: new FormControl('',[Validators.required]),
  });


  


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

  }

  agregarUsuario(){
    
    console.log('primero esto dog',this.formularioUser.value)
    console.log('valida esto',this.formularioUser.value.tipoUsuario)
    
    this.userNew = this.formularioUser.value

    console.log('va por aqui 1231', this.userNew)

    if (this.formularioUser.value.tipoUsuario =='Empresa') {

      this.userNew.empresa = this.formularioEmpresa.value
      
        console.log('Aqui mi dog',this.userNew )
    }
    
    this.usersService.insertUser(this.userNew).subscribe(
      res=>{
        console.log(res)
        if (this.isLogin == 1) {
          console.log('primer is login')
          this.login.emit(this.userNew)
        }else{

          this.visible2.emit('tabla');
        }

      },
      error=>{
        console.log(error)
      }
    )

  }

  cancelarCambios(){

    if (this.isLogin == 1) {
      this.login.emit(0)
    }else{

      this.visible2.emit('tabla');
    }
  }

  isValid(){
    if (this.formularioUser.value.tipoUsuario =='Empresa') {
      return this.formularioUser.valid && this.formularioEmpresa.valid
    }
    return this.formularioUser.valid
  }
}
