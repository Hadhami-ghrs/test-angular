import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlAPI='http://localhost:3000'
 
 
   constructor(private http: HttpClient) { }
   
   login(user:any): Observable<any> {
       return this.http.post<any>(this.urlAPI+'/usermanagment/login-user',user)
   }
 
   createUser(user:any): Observable<any>{
     return this.http.post<any>(this.urlAPI+'/usermanagment/add-user',user) as Observable<any>
   }
   getAllUsers(): Observable<any> {
   return this.http.get(this.urlAPI+'/usermanagment/list-user') as Observable<any>
   }
    getUserById(id:number){
     return this.http.get(this.urlAPI+'/usermanagment/user/'+JSON.stringify(id)) as Observable<any>
    }
   UpdateUser(id:number,user:any): Observable<any>{
     return this.http.patch<any>(this.urlAPI+'/usermanagment/update-user/'+JSON.stringify(id),user) as Observable<any>
   }
   deleteUser(id:number): Observable<any>{
     return this.http.delete(this.urlAPI+'/usermanagment/delete/'+JSON.stringify(id)) as Observable<any>
    }
 
 }