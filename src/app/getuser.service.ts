import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  private _getuserdata="https://reqres.in/api/users"

  constructor(private _http:HttpClient) { }
  
  getuser(){
    console.log(">>>>>>>>>>>>>>>>>>>>");    
    return this._http.get<any>(this._getuserdata);  
    console.log("executed.");
    
  }

}
