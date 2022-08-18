import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlansService } from 'src/app/services/plans.service';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.css']
})
export class NewPlanComponent implements OnInit {


  plan: any;
  @Input() idPlan: string = ''
  @Output() visible2 = new EventEmitter<string>();

  
  formularioPlan = new FormGroup({
    nombrePlan: new FormControl('',[Validators.required]),
    cantidadPaginas: new FormControl('',[Validators.required]),
    cantidadProductos: new FormControl('',[Validators.required]),
    almacenamiento: new FormControl('',[Validators.required]),
    anchoBanda: new FormControl('',[Validators.required]),
    precio: new FormControl('',[Validators.required])
  });


  


  constructor(private planService: PlansService) { }

  ngOnInit(): void {

  }

  agregarPlan(){
    
    console.log('primero esto dog',this.formularioPlan.value)
    
    this.plan = this.formularioPlan.value

    console.log('va por aqui 1231', this.plan)

    this.planService.insertPlan(this.plan).subscribe(
      res=>{
        console.log(res)
        this.plan = res
        
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
    return this.formularioPlan.valid
  }
}
