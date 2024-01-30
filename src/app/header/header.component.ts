import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EncrdecrService } from '../encrdecr.service';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import {CreateAccountComponent} from '../create-account/create-account.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'FRONTEND';
isLoggedIn:boolean=true;
loginblock:boolean=true;
showdropdown:boolean=true;
//profile data
name:any;
email:any;
logindata:any;
user:any
  constructor(
    private EncrdecrService:EncrdecrService,
    private AuthService:AuthServiceService,
    private router: Router
  ){
    this.AuthService.loginblock.subscribe(
      (res:any)=>{ 
        this.loginblock=res;})
  }

  ngOnInit(): void {
    this.AuthService.loginblock.next(true)
   // this.profiledata()
    
  }
  ngOnDestroy(): void {
    this.AuthService.loginblock.next(false)
    
  }
  
  // isLoggedIn(){
  //   return !!localStorage.getItem('tokan')
  // }
  onlogout(){
    //localStorage.removeItem('tokan')
    sessionStorage.clear()
    this.router.navigate(["/login"]);
  }
 
  OpenToggleMenu(){
    $("#mySidenav").css('width','275px');
   }
   closeNav() {
     // document.getElementById("mySidenav").style.width = "0";
     $("#mySidenav").css('width','0px');
   }

  menuItemClicked(option: string): void {
    console.log(`Option clicked: ${option}`);
    // Add your logic here for handling the selected option
  }


  profiledata(){
    debugger
    let flag='getprofile'
   let id='1'
    // let username:any
    // let email:any
    this.AuthService.getprofile(flag,id).subscribe(
      (response:any)=>{
        this.name=response.ArrayOfResponse[0].Username
        this.email=response.ArrayOfResponse[0].Email
       
        console.log(response)
      
  })}
  }

