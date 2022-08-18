import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.css']
})
export class AdminCompaniesComponent implements OnInit {

  
  @Input()  visible: string ="tabla";
  companies: any = [];
  idCompanyParent: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getCompanies().subscribe(
      res=>{
        this.companies = res
      },
      error=>{
        console.log(error)
      }
    );
  }

  
  
 verEmpresas(ver: string){
  
  this.usersService.getCompanies().subscribe(
    res=>{
      this.companies = res
      this.visible = ver
    },
    error=>{
      console.log(error)
    }
  );
  }

  eliminarEmpresa(idUser: string){
    this.usersService.deleteUser( idUser).subscribe(
      res=>{
        console.log(res)
        this.usersService.getCompanies().subscribe(
          res=>{
            
            this.companies = res
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
