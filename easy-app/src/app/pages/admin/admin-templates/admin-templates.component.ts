import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import * as ace from "ace-builds";

@Component({
  selector: 'app-admin-templates',
  templateUrl: './admin-templates.component.html',
  styleUrls: ['./admin-templates.component.css']
})
export class AdminTemplatesComponent implements OnInit {

  constructor() { }

  
  @ViewChild("editorCss")
  private editorCss!: ElementRef<HTMLElement>;
  
  @ViewChild("editorJs")
  private editorJs!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    

    const aceEditorCss = ace.edit(this.editorCss.nativeElement);
    aceEditorCss.session.setValue(`.app-ace-editor {
      border: 2px solid #f8f9fa;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }`);

    
    aceEditorCss.setTheme('ace/theme/twilight');
    aceEditorCss.session.setMode('ace/mode/css');

    aceEditorCss.on("change", () => {
      console.log(aceEditorCss.getValue());
    });


    const aceEditorJs = ace.edit(this.editorJs.nativeElement);
    aceEditorJs.session.setValue(`console.log("Esto es JS")`);

    
    aceEditorJs.setTheme('ace/theme/twilight');
    aceEditorJs.session.setMode('ace/mode/javascript');
    
    aceEditorJs.on("change", () => {
      console.log(aceEditorJs.getValue());
    });
  }

  ngOnInit(): void {
  }

}


