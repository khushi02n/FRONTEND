import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncrdecrService } from '../encrdecr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'jquery';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{
loginFrom:FormGroup;
isLoginSubmitted:boolean=false;

//selectedUserType:boolean = true;
  constructor(
    private AuthService : AuthServiceService,
    private fb:FormBuilder,
    private router:Router,
    private EncrdecrService:EncrdecrService,

  ){
    this.loginFrom=this.fb.group({
   //  UserType:['get',Validators.required],
     username:['',Validators.required],
     password:['',Validators.required],
    })
  }
  get r(){
    return this.loginFrom.controls;
  }

  ngOnInit(): void {
    
  }
  // ngAfterViewInit(){
  //   $('.ddlUserType').select2({
  //     minimumResultsForSearch: -1, placeholder: "Select"
  //   }).change(() =>{
  //     var selectedUserType = $('.ddlUserType').select2("val");   
  //     this.selectedUserType = selectedUserType
  //   });


  onLoginClick(){
    debugger
this.isLoginSubmitted=true;
if(this.loginFrom.invalid){
  return

}
else{
  // const logEntity ={
  //  // "role":this.selectedUserType,
  // // "flag":this.selectedUserType,
  //   "username":this.loginFrom.controls['username'].value,
  //   "password":this.loginFrom.controls['password'].value,
  // }
  let username=this.loginFrom.controls['username'].value;
  let pwd=this.loginFrom.controls['password'].value;
 // let data = JSON.stringify(logEntity)
  this.AuthService.loginUser(username,pwd).subscribe(
    (response) =>{
      //this.router.navigate(["/dashboard"]);

      if(response.body.status == 'success'){
        sessionStorage.setItem('Zew8HgA&8z2W&r%+',this.EncrdecrService.setEncr(JSON.stringify(response.body.ArrayOfResponse[0]))) //for employee information session

        this.router.navigate(["/dashboard"]);
        Swal.fire("Thank You !!","Login Successful","success")
      }
      else{
        this.router.navigate(["/createaccount"]);
      }
      
   
    },
      (error) =>{
        console.error("error",error);
      }   
      
      

    // (res:any)=>{
    //   if(res.status=="success"){
        
    //     this.router.navigate(["/dashboard"]);
      
    //   }
    //   else{
    //     this.router.navigate(["/createaccount"]);
    //     console.error;
    //   }
//  }
  )
}
  }

 
 

}
