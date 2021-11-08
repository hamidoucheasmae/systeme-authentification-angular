import { Injectable } from '@angular/core';

export const AUTH_TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(authData:string){
    sessionStorage.setItem(AUTH_TOKEN_KEY , authData)
  }
}
