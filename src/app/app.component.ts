import { Component,  OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EncrdecrService } from './encrdecr.service';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'FRONTEND';
  constructor(){}
  ngOnInit(): void {
    
  }
}
// isLoggedIn:boolean=true;
// loginblock:boolean=true;
//   constructor(
//     private EncrdecrService:EncrdecrService,
//     private AuthService:AuthServiceService,
//     private router: Router
//   ){
//     this.AuthService.loginblock.subscribe(
//       (res:any)=>{ 
//         this.loginblock=res;})
//   }

//   ngOnInit(): void {
//     this.AuthService.loginblock.next(true)
    
//   }
//   ngOnDestroy(): void {
//     this.AuthService.loginblock.next(false)
    
//   }
  
//   // isLoggedIn(){
//   //   return !!localStorage.getItem('tokan')
//   // }
//   onlogout(){
//     localStorage.removeItem('tokan')
//     this.router.navigate(["/login"]);
//   }
//   // OnLogOutClick(){
//   //   const emplog={
//   //     "email_id":res.ArrayOfResponse[0].Official_EmaildID
//   //   }
//   //   let logouttime=this.loginFrom.controls['logouttime'].value;
//   //   this.AuthService.logOut(logouttime).subscribe(
//   //     Response =>{
//   //       this.router.navigate(["/login"]);
    
//   //     },
//   //     error =>{
//   //       console.error("error",error);
//   //     }  
 
//   // )}
 
     
   
   

// //   onLogOutClick(){
// //     let Data:any = sessionStorage.getItem('Zew8HgA&8z2W&r%+');
// //     let UserData = JSON.parse(this.EncrdecrService.getDecr(Data));
// //     const json={  
// //      "email_id":UserData.Official_EmaildID
// //     }
// //     Swal.fire({
// //       title:"Log out",
// //       icon:"question",
// //       showCancelButton:true,
// //       confirmButtonText:"Yes",
// //       cancelButtonText:"No",
// //       text:`Are you sure you want to Logout`,
// //     }).then(result =>{
// //       if(result["isConfirmed"]){
  
// //         if(res.status =="success")
// //         {
// //           sessionStorage.clear();
// //           this.router.navigate(["/login"]);
// //         }
// //           })
// //         }
// //       })
// // }