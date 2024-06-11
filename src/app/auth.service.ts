import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class AuthService {
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
  hasRole(expectedRole: string): boolean {
    const token = this.getToken();
    if (token) {
      console.log(token);
      
      const decoded: any = jwt_decode(token);
      console.log("decoded:" , decoded);
      return decoded.role === expectedRole;
    }
    return false;
  }
  urlPost = environment.url + "/auth/";
  constructor(private httpService: HttpClient, private router: Router) { }
  // token:string=null;
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  get isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwt_decode(token);
      return decoded.expiresIn > Date.now() / 1000;
    }
    return false;
  }

  signUp(email:string,pass:string){
    return this.httpService.post(this.urlPost+'register',
    {
    "email": email,
    "password": pass,
    "typeUser":0
    }
    );
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  signIn(email: string, pass: string): Observable<any> {
    return this.httpService.post(this.urlPost + 'login', {
      email: email,
      password: pass,
      typeUser: 0
    }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }
}
