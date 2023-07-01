import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id;
  branch:any
  myForm:FormGroup=new FormGroup({
    branch_code: new FormControl(''),
    branch_name:new FormControl(''),
    address:new FormControl(''),
  })
  constructor(private branchService:BranchService,private fb: FormBuilder,private route:ActivatedRoute,
    private router:Router,private toastr:ToastrService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');
     })

     this.getBranch(this.id)
  }


  getBranch(id){
    this.branchService.getOneBranch(id)
    .subscribe(data=>{
      this.branch=data;

      this.myForm.setValue({
        branch_code: this.branch.branch_code,
        branch_name: this.branch.branch_name,
        address:this.branch.address
      })
    })
  }

 

  saveBranch(){

    this.branchService.updateBranch(this.id,this.myForm.value)
    .subscribe(data=>{
      console.log(data)
      this.toastr.success(data.message)
      // alert(data.message)
      this.router.navigate(['/branches'])
    })

  }

}
