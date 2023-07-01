import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit{
  
  submitted = false;
  success=false
  myForm:FormGroup;
  branch_code;branch_name;address;
  constructor(private branchService:BranchService,private fb: FormBuilder){}
 
  ngOnInit(){
    this.myForm=this.fb.group({
      branch_code: ['',Validators.required],
      branch_name: ['',Validators.required],
      address: ['',Validators.required]
    })
  }
  
  get f(){
    return this.myForm.controls;
  }

  saveBranch(){
    this.submitted = true;

    if(this.myForm.invalid){
      return;
    }
    
    this.branchService.addBranch(this.myForm.value)
    .subscribe(data=>{
      console.log(data);
      this.success=true;
    })

  }

  newBranch(){
    this.submitted=false;
    this.success=false
    this.myForm.reset()
  }
}
