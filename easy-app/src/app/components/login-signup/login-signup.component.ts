import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  
  user : any = {
      nombre  :'',
      apellidos: '',
      correo : '',
      tipoUsuario: '',
      estado : ''
  };
  
  formularioLogin = new FormGroup({
    correo: new FormControl('',[Validators.required]),
    contrasena: new FormControl('',[Validators.required])
  });


  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  primerIngreso(user : any){
    if (user == 0) {
      
      this.router.navigate(['/**'])
    }else{
      
      console.log('entra a primer ingreso')
      this.formularioLogin.value.correo = user.correo;
      this.formularioLogin.value.contrasena = user.contrasena;
      this.validarCredenciales();
    }

  }

  validarCredenciales(){
    
    console.log('validar aqui', this.formularioLogin.value)
    this.usersService.validarCredenciales(this.formularioLogin.value).subscribe(
      
      res=>{
        
       /* this.user.nombre = res.nombre.toString();
        this.user.apellidos = res.apellidos.toString();
        this.user.correo = res.correo.toString();
        this.user.tipoUsuario = res.tipoUsuario.toString();
        this.user.estado = res.estado.toString();

        if (this.user.tipoUsuario == 'Empresa') {
          this.user.setValue({
            nombreEmpresa: res.empresa.nombreEmpresa,
            estadoEmpresa: res.user.empresa.estadoEmpresa
          })
        }*/
        this.user = res;
        console.log('aqui a ver que pedos',this.user)

        this.redireccionar();

      },
      error=>{
        console.log(error)
      }
    )
  
  }

  redireccionar(){
    if (this.user.tipoUsuario == 'Administrador' ) {
      this.router.navigate(['/admin'])
    }else if (this.user.tipoUsuario == 'Empresa' ) {
      this.router.navigate(['/admin-companies'])
      
    }else if (this.user.tipoUsuario == 'Cliente' ) {
      this.router.navigate(['/companies'])
      
    }
  }

}
