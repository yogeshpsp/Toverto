import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendors } from './vendors';
@Injectable({ 
  providedIn: 'root'
})
export class UserService {
private url:string="http://localhost:3000/data";

  constructor(private http:HttpClient) {}
  getUser():Observable<Vendors[]>{
    return this.http.get<Vendors[]>(this.url);
  }
  newuser(data:any){
    return this.http.post<any>(this.url,data);
  }
  deleteuser(data){
    return this.http.delete(this.url+"/"+data)
  }
  updateuser(id,data){
    return this.http.put(this.url+"/"+id,data)
  }
  }
