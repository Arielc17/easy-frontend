import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private httpClient: HttpClient) { }


  getTemplates():Observable<any>{
    console.log('Imprimir Templates')
    
    return this.httpClient.get('http://localhost:8888/templates',{})
   
  }

  getTemplate(idTemplate: string):Observable<any>{
    console.log('Imprimir usuarios')
    
    return this.httpClient.get('http://localhost:8888/templates/'+idTemplate,{})
   
  }
  
  insertTemplate(template: any){
    console.log('Imprimir template desde services', template)
    return this.httpClient.post('http://localhost:8888/templates/nuevo',template)

  }

  updateTemplate( template: any, idTemplate: string ){
    return this.httpClient.patch('http://localhost:8888/templates/'+idTemplate+'/actualizar',template)

  }

  deleteTemplate( idTemplate: string ){
    return this.httpClient.delete('http://localhost:8888/templates/'+idTemplate+'/eliminar',{})

  }



}
