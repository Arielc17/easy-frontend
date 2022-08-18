import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }


  getUsers():Observable<any>{
    console.log('Imprimir usuarios')
    
    return this.httpClient.get('http://localhost:8888/users',{})
   
  }

  getUser(idUser: string):Observable<any>{
    console.log('Imprimir usuarios')
    
    return this.httpClient.get('http://localhost:8888/users/'+idUser,{})
   
  }
  
  insertUser(user: any){
    console.log('Imprimir usuario desde services', user)
    return this.httpClient.post('http://localhost:8888/users/nuevo',user)

  }

  updateUser( user: any, idUser: string ){
    return this.httpClient.patch('http://localhost:8888/users/'+idUser+'/actualizar',user)

  }

  deleteUser( idUser: string ){
    return this.httpClient.delete('http://localhost:8888/users/'+idUser+'/eliminar',{})

  }


  getCompanies( ):Observable<any>{
    return this.httpClient.post('http://localhost:8888/users/empresas',{});

  }

  deleteCompany( idUser: string ){
    return this.httpClient.delete('http://localhost:8888/users/'+idUser+'/eliminar',{})

  }

  updateCompany( user: any, idUser: string ){
    return this.httpClient.patch('http://localhost:8888/users/'+idUser+'/actualizar',user)

  }
  
  validarCredenciales( user: any):Observable<any>{
    console.log('vamo a ver que pedo en service',user)
    return this.httpClient.post('http://localhost:8888/users/validarCredenciales',user);

  }


}
