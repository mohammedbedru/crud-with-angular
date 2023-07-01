import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
 
  users: any[];
  isAdmin=false;

  constructor(private userService:UserService,private router:Router,
    private tokenStorage:TokenStorageService,private toastr:ToastrService){}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers()
    .subscribe(data=>{
      this.users=data;
    })
  }

  deleteUser(id){
    this.userService.deleteUser(id)
    .subscribe(data=>{
      // console.log(data)
      this.toastr.success('user deleted successfully')
      this.getAllUsers()
    })
  }

  // checkAdmin(){ //login checked in authGuard
  //     const user = this.tokenStorage.getUser();
  //     let roles = user.roles;
  //     this.isAdmin = roles.includes('ROLE_ADMIN');
  // }

  getRoles(){
    
  }



   
}
