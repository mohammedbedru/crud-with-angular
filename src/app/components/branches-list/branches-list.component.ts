import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/models/branch';
import { BranchService } from 'src/app/services/branch.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})
export class BranchesListComponent implements OnInit{
 
  branches: Branch[];
  isAdmin=false;
  displayedColumns: string[] = ['id', 'branch_name', 'branch_code', 'address','action'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private branchService:BranchService,private router:Router,
    private tokenStorage:TokenStorageService,private toastr:ToastrService){}

  ngOnInit() {
    this.getAllBranches();
    this.checkAdmin();
  }

  getAllBranches(){
    this.branchService.getAll()
    .subscribe(data=>{
      this.branches=data;
      this.dataSource=new MatTableDataSource(this.branches);
      this.dataSource.paginator=this.paginator;
    })
  }

  deleteBranch(id){
    this.branchService.deleteBranch(id)
    .subscribe(data=>{
      // console.log(data)
      this.toastr.success('branch deleted successfully')
      this.getAllBranches()
    })
  }

  checkAdmin(){ //login checked in authGuard
      const user = this.tokenStorage.getUser();
      let roles = user.roles;
      this.isAdmin = roles.includes('ROLE_ADMIN');
  }


   
}
