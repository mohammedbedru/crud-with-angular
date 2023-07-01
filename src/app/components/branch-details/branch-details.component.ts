import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit{
  branch:Branch = {
   id:0,
   branch_code: '',
   branch_name: '',
   address: ''
 };
 id:string
  constructor(private branchService:BranchService,private route:ActivatedRoute,private router:Router){}

 ngOnInit(){
   this.route.paramMap.subscribe((params:ParamMap)=>{
     this.id=params.get('id');
    })

   this.getBranch(this.id);
   
 }

 getBranch(id){
   this.branchService.getOneBranch(id)
   .subscribe(data=>{
     this.branch=data;
     console.log("branch data: "+JSON.stringify(data))
     console.log("branch data again is: "+JSON.stringify(this.branch))
   })
 }


 deleteBranch(){
   
   this.branchService.deleteBranch(this.id)
   .subscribe(result=>{
     console.log(result)
     this.router.navigate(['/branches']);

   })
 }

 
}
