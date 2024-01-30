import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  clients:any[]=[];
  public getJsonValue:any;
  constructor(private AuthService:AuthServiceService){}
  ngOnInit(): void {
    this.showprofile();
    
  }

  showprofile(){
    var json={
      clients:1

    }
    let flag= 'get'
    this.AuthService.getClient(json,flag).subscribe(
      (response) =>{
        //debugger
       if(response.status=="success")
       {
         this.clients=response["ArrayOfResponse"];
          console.log(this.clients[0]);   
         // console.log(error)
         console.log(json);
         console.log(this.clients);
       }
       else{
        alert("error")
       }
      },
      (error) => {
        // Handle registration error
        console.error('Error registering user', error);
      }
    )
  }



}
