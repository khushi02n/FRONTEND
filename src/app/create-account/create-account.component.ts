import { Component,OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IsValidPassword } from '../validations';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit{

  IsSubmited : boolean=true;
  loginForm:FormGroup;
  selectedUserType:number=0;
  public postjsonValue:any;
  isLoginSubmitted:boolean=true;



constructor( 
  private fb : FormBuilder,
  private AuthService:AuthServiceService,
  private router:Router){
    this.loginForm = this.fb.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      rpassword:['',Validators.required],
    
    })
  }
  
  ngOnInit(): void {
    
  }

  onSubmited(){
    //debugger
     const data = this.loginForm.value
     this.IsSubmited=true;
     
    if (this.loginForm.invalid){
      return
    }
    else{
      var json={
        UserName: this.loginForm.controls['name'].value,
        Mobile: this.loginForm.controls['mobile'].value,
        Email: this.loginForm.controls['email'].value,
        Password: this.loginForm.controls['password'].value,
        RepeatPassword: this.loginForm.controls['rpassword'].value,       
      }
      let data = JSON.stringify(json);
     
      this.AuthService.newUser(json).subscribe(
        Response =>{
          this.router.navigate(["/dashboard"]);
       
        },
          error =>{
            console.error("error",error);
          }      
      )
    }
  }
  get r(){
    return this.loginForm.controls;
  }
}
