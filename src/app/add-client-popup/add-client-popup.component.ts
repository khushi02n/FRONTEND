import { Component ,OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog'
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog'
import { AuthServiceService } from '../auth-service.service';
import Swal from 'sweetalert2';
import { error } from 'jquery';
import { Router } from '@angular/router';
import { phonenumber } from '../validations';
@Component({
  selector: 'app-add-client-popup',
  templateUrl: './add-client-popup.component.html',
  styleUrls: ['./add-client-popup.component.scss']
})
export class AddClientPopupComponent implements OnInit{
  closemesssage='closed';
  addClientForm:FormGroup;
  isSubmitted:boolean=true;
  slectedUserType:number=0;
  public getJsonValue:any;
  public postJsonValue:any;
  public  userdata:any[]=[
  ];
 constructor(
  @Inject(MAT_DIALOG_DATA) public data:any,
  private ref:MatDialogRef<AddClientPopupComponent>,
  private fb:FormBuilder,
  private AuthService:AuthServiceService,
  private router:Router){
    this.addClientForm= this.fb.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      email:['',Validators.required],
      amount:['',Validators.required],
      status:['',],
      //status:[true]
    },)
  
  }
  ngOnInit(): void {
    //this.inputdata=this.data; 
  }
  inputdata:any;
  closepopup(){
    if(this.addClientForm.valid){
      this.ref.close('closed');
    }
    else{
      Swal.fire("fill the data")
    }
 
 }
 saveuser(){
  //debugger
  const clientdata = this.addClientForm.value
  this.isSubmitted = true;
  if(this.addClientForm.invalid){
   return
 }
 else{
  // debugger
   let json ={
     Name:this.addClientForm.controls['name'].value,
     Mobile:this.addClientForm.controls['mobile'].value,
     Email:this.addClientForm.controls['email'].value,
     Amount:this.addClientForm.controls['amount'].value,
     Status:this.addClientForm.controls['status'].value,
     //status:this.addClientForm.controls[true]   
    }
    let data = JSON.stringify(json);
    this.AuthService.addnewclient(json).subscribe(
      (response)=>{
      //Swal.fire("Thank You !!","Client Added Successful","success")
      this.refreshPage() 
      console.log('User registered successfully', response);
      console.log(response);
      this.refreshPage();
    }, 
    (error) => {
      // Handle registration error
      console.error('Error registering user', error);
    },
    )// console.log(this.addClientForm.value)
  }
  
 }
 


 refreshPage() {
  debugger
  // Use the Angular Router to navigate to the current route
  window.location.reload();
  //this.router.navigate(['/client'], { queryParams: { reload: new Date().getTime() } });
}
 get r(){
  return this.addClientForm.controls;
}
 
}
