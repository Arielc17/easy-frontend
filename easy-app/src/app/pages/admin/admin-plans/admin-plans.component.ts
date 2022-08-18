import { Component, Input, OnInit } from '@angular/core';
import { PlansService } from 'src/app/services/plans.service';

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.css']
})
export class AdminPlansComponent implements OnInit {

  @Input()  visible: string ="tabla";
  plans: any = [];
  idPlanParent: string = '';

  constructor(private plansService: PlansService) { }

  ngOnInit(): void {
    this.plansService.getPlans().subscribe(
      res=>{
        this.plans = res
        console.log(this.plans)
      },
      error=>{
        console.log(error)
      }
    );
  }
  
  
 verPlanes(ver: string){
  
  this.plansService.getPlans().subscribe(
    res=>{
      this.plans = res
      this.visible = ver
    },
    error=>{
      console.log(error)
    }
  );
  }

  eliminarPlan(idPlan: string){
    this.plansService.deletePlan( idPlan).subscribe(
      res=>{
        console.log(res)
        this.plansService.getPlans().subscribe(
          res=>{
            
            this.plans = res
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
