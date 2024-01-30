import {MatDialog} from '@angular/material/dialog'
import { Component, OnInit,Inject } from '@angular/core';
import { AddClientPopupComponent } from '../add-client-popup/add-client-popup.component';
import { AuthServiceService } from '../auth-service.service';
import { error } from 'jquery';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  searchForm:FormGroup = new FormGroup({
    name :new FormControl('name')
  })
 public  userdata:any[]=[];
 name:any;
  public getJsonValue:any;
  data: any;
  

  constructor(
   private dialog:MatDialog,
   private AuthService:AuthServiceService,
   private router:Router,
   private fb :FormBuilder,
   private activatedroute:ActivatedRoute
   ){
   

  }
   ngOnInit(): void {
     this.showdata();
   }
   inputdata:any;
   OpenPopUp(){
   var popup =  this.dialog.open(AddClientPopupComponent,{
      width:'45%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
     data:{
      title:'new client'
     } 
    });
      popup.afterClosed().subscribe(item=>{
        console.log(item);
      })
   }

   showdata(){
    //debugger
    var json = {
      userdata :1
    }
    let flag= 'get'
       this.AuthService.getClient(json,flag).subscribe(
        (response) =>{
         // debugger
         if(response.status=="success")
         {
           this.userdata=response["ArrayOfResponse"];
           $(document).ready(function () {
            $.fn.dataTable.ext.errMode = 'none';
            //WithIndexation
            $('#tbldata').DataTable({
              pageLength: 5,
              pagingType:'full',
             //bLengthChange: false,
              ordering: true,
              searching: true,
              // destroy: true,
              language: {
                // paginate: {
                //   next: '&#8594;', // or '→'
                //   previous: '&#8592;' // or '←'
                //}
              }
              
             
            })
            
          });
          
            console.log(this.userdata[0]);   
           // console.log(error)
           console.log(json);
           console.log(this.userdata);
         }
         else{
          alert("No data found")
         }
         
          console.log(this.userdata);
          setTimeout(() => {
            //this.refreshPage();
          }, 2000);
        },
        (error) => {
          // Handle registration error
          console.error('Error registering user', error);
        }
       )   
   }


   search(){
    //let name=this.searchForm.controls['name'].value;
    this.AuthService.search().subscribe(
      res=>{
        this.showdata();
      }
    )
    
    
   }
   onDelete(index:any){
    let flag= 'delete'
   // index=0;
    this.AuthService.deleteClient(index,flag).subscribe(
      res=>{
        if(res.status ===parseInt("failed") ){
          Swal.fire({
            title: 'Record not deleted',
            text: 'Please try again later',
            icon: 'error',
          });
        } else {
        // if(res.status ===parseInt("success")){
        //   Swal.fire({
        //     title:'are you sure?'
        //   })
        // }
        // else{
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#29008a',
            confirmButtonText: 'Yes, delete it!',
            customClass:{
            popup:'my-custom-size'
            
            
            }
            
          }).then((result) => {
              this.showdata();
             })
        }

      });
    }
    //  Swal.fire({
    //         title: 'Deleted Successfully',
    //         text: `record Deleted Successfully`,
    //         icon: 'success',
    //       }).then((result) => {
    //         this.showdata();
    //       })
  }
      // }
    
   
  //  refreshPage() {
  //   // Use the Angular Router to navigate to the current route
  //   this.router.navigate(['/client']);


// searchdata(){
// debugger
// const name = this.searchForm.value;
//   this.AuthService.search().subscribe(

//     (result) =>{
//       console.log(result);
//     }
//   )
// }



