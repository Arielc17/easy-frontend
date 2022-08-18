import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminEmpresasService {

  constructor(private httpClient: HttpClient) { }

  setImagen():Observable<any>{
    console.log('Imprimir usuarios')
    
    return this.httpClient.post('http://www.googleapis.com:8888/plans',{})
   
  }
  getPlans():Observable<any>{
    console.log('Imprimir usuarios')
    
    return this.httpClient.get('http://localhost:8888/plans',{})
   
  }

  getPlan(idPlan: string):Observable<any>{
    console.log('Imprimir usuarios')
    
    return this.httpClient.get('http://localhost:8888/plans/'+idPlan,{})
   
  }
  
  insertPlan(plan: any){
    console.log('Imprimir usuario desde services', plan)
    return this.httpClient.post('http://localhost:8888/plans/nuevo',plan)

  }

  updatePlan( plan: any, idPlan: string ){
    return this.httpClient.patch('http://localhost:8888/plans/'+idPlan+'/actualizar',plan)

  }

  deletePlan( idPlan: string ){
    return this.httpClient.delete('http://localhost:8888/plans/'+idPlan+'/eliminar',{})

  }



}
