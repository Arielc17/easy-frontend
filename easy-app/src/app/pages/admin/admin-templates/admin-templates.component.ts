import { Component, OnInit, Input } from '@angular/core';
import { TemplatesService } from 'src/app/services/templates.service';


import * as ace from "ace-builds";

@Component({
  selector: 'app-admin-templates',
  templateUrl: './admin-templates.component.html',
  styleUrls: ['./admin-templates.component.css']
})
export class AdminTemplatesComponent implements OnInit {

  @Input()  visible: string ="tabla";
  templates: any = [];
  idTemplateParent: string = '';

  constructor(private templatesService: TemplatesService) { }

  ngOnInit(): void {
    this.templatesService.getTemplates().subscribe(
      res=>{
        this.templates = res
      },
      error=>{
        console.log(error)
      }
    );

  }


  
 verPlantillas(ver: string){
  
  this.templatesService.getTemplates().subscribe(
    res=>{
      this.templates = res
      this.visible = ver
    },
    error=>{
      console.log(error)
    }
  );
  }

  eliminarPlantilla(idUser: string){
    this.templatesService.deleteTemplate( idUser).subscribe(
      res=>{
        console.log(res)
        this.templatesService.getTemplates().subscribe(
          res=>{
            
            this.templates = res
          },
          error=>{
            console.log(error)
          }
        );
        
      },
      error=>{
        console.log(error)
      }
    )

   
      
  }

  

}
