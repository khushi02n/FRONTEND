import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient,
    private router:Router
  ) { }
 
  baseUrl="http://localhost:5884/api";

  newUser(data:any):Observable<any>{
    //debugger
   // return this.http.post<any>(`${this.baseUrl}/Admin/CreateAccount`,data);
    return this.http.post<any>(`${this.baseUrl}/Admin/CreateAccount`,data);
  }


  loginUser(username:any,pwd :any):Observable<any>{
    debugger
    return this.http.get<any>(
      `${this.baseUrl}/Admin/loginUser?username=${username}&pwd=${pwd}`, {observe: 'response'});
  
  }

 
  // logOut(logouttime:any):Observable<any>{
  //   debugger
  //   return this.http.post<any>(
  //     `${this.baseUrl}/Admin/logOutUser?logouttime=${logouttime}`, {observe: 'response'});
  
  // }

  loginblock=new BehaviorSubject<boolean>(false);
  showdropdown= new BehaviorSubject<boolean>(false);
  //const currentValue: boolean = loginblock.value;


  //add clients
  addnewclient(clientdata:any):Observable<any>{
   // debugger
    return this.http.post<any>(`${this.baseUrl}/clients/addClient`,clientdata)
  }
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  getClient(data:any,flag:any):Observable<any>{  
    //debugger
    let url = `${this.baseUrl}/clients/getClient?flag=${flag}`
    return this.http.get(url,this.headers).pipe();
  }
 
  totalClient(flag:any):Observable<any[]>{
    let url = `${this.baseUrl}/clients/getClient?flag=${flag}`
    return this.http.get<any[]>(url,this.headers).pipe();
  }
  getprofile(flag:any,id:any){
    let url = `${this.baseUrl}/clients/getProfile?flag=${flag}&id=${id}`
    return this.http.post(url,this.headers).pipe();

  }

  search(){
    debugger
    let url = `${this.baseUrl}/Search/SearchData`
    return this.http.get(url,this.headers).pipe();

  }
  // deleteClient(id:any,flag:any){
  //   //let url = `${this.baseUrl}/Search/SearchData?id=${id}&flag=${flag}`
  //   // return this.http.get(url,{observe:'response'},this.headers);
  //   // return this.http.get(`${this.baseUrl}/Search/SearchData?id=${id}&flag=${flag}`,{observe:'response'},this.headers);
    
  // }
  public deleteClient(id: any,flag : any) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/DeleteClient?id=${id}&flag=${flag}`, {observe: 'response'});
  }

  chartdata(flag:any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/charts/chartdata?flag=${flag}`)
  }
}