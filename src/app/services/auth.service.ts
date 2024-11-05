import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http : HttpClient){}
  baseServerUrl = "https://localhost:44334/api/User/";
  createUser(user : Array <string>){
    return this.http.post(this.baseServerUrl + 'register',
      {
        Name : user[0],
        LastName : user[1],
        Email : user[2],
        Password : user[3],
        PhoneNumber : user[4],
      },
      {
        responseType: 'text',
      }
    );
  }
  loginUser(loginInfo : Array<string>) {
    return this.http.post(this.baseServerUrl + 'login',
      {
        Email : loginInfo[0],
        Password : loginInfo[1],
      },
      {
        responseType:'text',
      }
    );
  }
}