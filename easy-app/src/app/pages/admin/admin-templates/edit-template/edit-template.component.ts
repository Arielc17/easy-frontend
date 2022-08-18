import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemplatesService } from 'src/app/services/templates.service';

import * as ace from "ace-builds";

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {
  
  template: any;
  @Input() idTemplate: string = ''
  @Output() visible2 = new EventEmitter<string>();

  css: string = '/* Ingrese aqui el codigo CSS de la plantilla */';
  javascript: string = '// Ingrese aqui el codigo Javascript de la plantilla';

  formularioTemplate = new FormGroup({
    titulo: new FormControl('',[Validators.required]),
    descripcion: new FormControl('',[Validators.required])
  });


  constructor(private templatesService: TemplatesService) { }


  
  @ViewChild("editorCss")
  private editorCss!: ElementRef<HTMLElement>;
  
  @ViewChild("editorJs")
  private editorJs!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    

    const aceEditorCss = ace.edit(this.editorCss.nativeElement);
    aceEditorCss.session.setValue(this.css);

    
    aceEditorCss.setTheme('ace/theme/twilight');
    aceEditorCss.session.setMode('ace/mode/css');

    aceEditorCss.on("change", () => {
      this.css = aceEditorCss.getValue()
      console.log(this.css);
    });


    const aceEditorJs = ace.edit(this.editorJs.nativeElement);
    aceEditorJs.session.setValue(this.javascript);

    
    aceEditorJs.setTheme('ace/theme/twilight');
    aceEditorJs.session.setMode('ace/mode/javascript');
    
    aceEditorJs.on("change", () => {
      this.javascript = aceEditorJs.getValue()
      console.log(this.javascript);
    });
  }

  ngOnInit(): void {


    this.templatesService.getTemplate(this.idTemplate).subscribe(
      res=>{
        console.log(res)
        this.template = res
        this.formularioTemplate.setValue({
          titulo: this.template.titulo.toString(),
          descripcion: this.template.descripcion.toString()
        });
        
    this.css = this.template.css;
    this.javascript = this.template.javascript
    this.ngAfterViewInit()

      },
      error=>{
        console.log(error)
      }
    )
  
    
  }
  
  
  guardarCambios(){
    
    console.log('primero esto dog',this.formularioTemplate.value)
    
    this.template = this.formularioTemplate.value
    this.template.css = this.css;
    this.template.javascript = this.javascript;
    console.log('va por aqui 1231', this.template)

    this.templatesService.updateTemplate(this.template, this.idTemplate).subscribe(
      res=>{
        console.log(res)
        this.template = res
        
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
    return this.formularioTemplate.valid
  }
}



