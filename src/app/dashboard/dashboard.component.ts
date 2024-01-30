import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AboutComponent } from '../about/about.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 // totalclients:any="";
 // clients: any;
 public userdata:string[]=[]
 activeclient: any;
 totalclient:any;
 inactiveclient:any;
 amount:any;
 imageGalleryData:any;

 //chart
 chartdata:any;
 labeldata:any[]=[];
 realdata:any[]=[];
 colordata:any[]=[];

 user:any


 customOptions: OwlOptions = {
  autoplay:true,
  loop: true,
  margin:20,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  dotsEach: true,
  navSpeed: 1000,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
} 



constructor(private AuthService:AuthServiceService){

}
  ngOnInit(): void {
    this.showcount();
    this.showtotalcount();
    this.showinactivecount();
    this.showAmount();
    // this.RenderchartAPI();
    let flag='getchart'
      let chartdata={
        Name:'',
        amonut:''
      }
      //debugger
      this.AuthService.chartdata(flag).subscribe(
        (response:any)=>{
          this.chartdata=response.ArrayOfResponse
         // console.log(this.chartdata)
          if(this.chartdata!=null){
            for(let i=0; i<this.chartdata.length; i++){
             // console.log(this.chartdata[i])
             // console.log(this.chartdata)
              this.labeldata.push(this.chartdata[i].Name)
              this.realdata.push(this.chartdata[i].total_amount)
            }
            this.RenderChart(this.labeldata,this.realdata);
          }
        }
          
        )
      
    //this.RenderChart(this.labeldata,this.realdata);

    
  }
  showcount(){
        let flag= 'active'      
        this.AuthService.totalClient(flag).subscribe(
          (response :any) =>{
           // debugger;
             this.activeclient  =response.ArrayOfResponse[0].Column1;
          },
          (error) => {
            // Handle registration error
            console.error('Error registering user', error);
          }
        )
      }
      showtotalcount(){
        let flag= 'total'
       // debugger
        this.AuthService.totalClient(flag).subscribe(
          (response :any) =>{
            //debugger;
             this.totalclient = response.ArrayOfResponse[0].Column1;
          },
          (error) => {
            // Handle registration error
            console.error('Error registering user', error);
          }
        )
      }
      showinactivecount(){
        let flag= 'inactive'
        //debugger
        this.AuthService.totalClient(flag).subscribe(
          (response :any) =>{
           // debugger;
             this.inactiveclient = response.ArrayOfResponse[0].Column1;
          },
          (error) => {
            // Handle registration error
            console.error('Error registering user', error);
          }
        )
      }
      showAmount(){
        let flag= 'sum'
        //debugger
        this.AuthService.totalClient(flag).subscribe(
          (response :any) =>{
           // debugger;
             this.amount = response.ArrayOfResponse[0].total_amount;
             console.log( this.amount);
          },
          (error) => {
            // Handle registration error
            console.error('Error registering user', error);
          }
        )
      }


      RenderChart( labeldata:any,realdata:any){
        const myChart = new Chart("piechart", {
          type: 'pie',
          data: {
              labels: labeldata,
              datasets: [{
                  label: '# of Votes',
                  data: realdata,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
    }

    // RenderchartAPI(){
    //   let flag='chart'
    //   let data={
    //     Name:'',
    //     amout:''
    //   }
    //   this.AuthService.getClient(data,flag).subscribe(
    //     (result=>{
    //       this.chartdata=result

    //       if(this.chartdata!=null){
    //         for(let i=0; i<this.chartdata.length; i++){
    //           console.log(this.chartdata[i])
    //           this.labeldata.push(this.chartdata[i].Name)
    //           this.realdata.push(this.chartdata[i].amount)
    //         }
    //         this.RenderChart(this.labeldata,this.realdata);
    //       }
    //     })
    //   )
    // }
  // this.data  =response.ArrayOfResponse[0].Column1;
           // console.log(data)
          // let arr=response
           // this.id=response;
           // response;
            //debugger
          //  if(response.status=="success")
          //  {
          //   //  this.clients=response["ArrayOfResponse"];
          //   //   console.log(this.clients[0]);   
          //   //  // console.log(error)
          //   //  console.log(json);
          //   //  console.log(this.clients);
          //  }
          //  else{
          //   alert("error")
          //  }




//   showdata(){
//     debugger
// let flag="active"
//     this.AuthService.totalClient(flag).subscribe(
//       (clients:any) => {
//         // res
//         // console.log(res);
//        this.totalclients = clients.filter().length;
//       })

  }
  // getTotalActiveClients(): void {
  //   this.clientService.getClients().subscribe((clients) => {
  //     // Assuming 'status' is a property indicating the client's status
  //     this.totalActiveClients = clients.filter(client => client.status === 'active').length;
  //   });
  // }











//export class DashboardComponent implements OnInit {
  
  //  public userdata:any[]=[]
  //  a:any
  //   id: any;
  
  //   constructor(private AuthService:AuthServiceService){}
  //   ngOnInit(): void {
  //    //this.showcount()
   
  //   }
  //   showcount(){
  //     let flag= 'active'
    
  //     this.AuthService.totalClient(flag).subscribe(
  //       (response) =>{
  //         debugger;
  //         console.log(response)
  //       // let arr=response
  //         this.id=response;
  //         response;
  //         //debugger
  //       //  if(response.status=="success")
  //       //  {
  //       //   //  this.clients=response["ArrayOfResponse"];
  //       //   //   console.log(this.clients[0]);   
  //       //   //  // console.log(error)
  //       //   //  console.log(json);
  //       //   //  console.log(this.clients);
  //       //  }
  //       //  else{
  //       //   alert("error")
  //       //  }
  //       },
  //       (error) => {
  //         // Handle registration error
  //         console.error('Error registering user', error);
  //       }
  //     )
  //   }
  //   @ViewChild(AboutComponent)child:any;
  //   showcount1(){
  //     let flag= 'active'
  //     this.AuthService.totalClient(flag).subscribe(
  //       (response) =>{
  //         debugger;
  //         console.log(response)
  //       // let arr=response
  //         this.id=response;
  //         response;     },
  //         (error) => {
  //           // Handle registration error
  //           console.error('Error registering user', error);
  //         }
  //       )
  
  //   }
  
  
  
