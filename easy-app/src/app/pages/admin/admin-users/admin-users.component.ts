import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  @Input()  visible: string ="tabla";
  users: any = [];
  idUserParent: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      res=>{
        this.users = res
      },
      error=>{
        console.log(error)
      }
    );

  }


  
 verUsuarios(ver: string){
  
  this.usersService.getUsers().subscribe(
    res=>{
      this.users = res
      this.visible = ver
    },
    error=>{
      console.log(error)
    }
  );
  }

  eliminarUsuario(idUser: string){
    this.usersService.deleteUser( idUser).subscribe(
      res=>{
        console.log(res)
        this.usersService.getUsers().subscribe(
          res=>{
            
            this.users = res
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
