import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { decode } from '@angular/router/src/url_tree';
import jwt_decode from 'jwt-decode';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = this.authService.getToken();

    if (token) {
      const tokenPayload: any = jwt_decode(token);

      if (this.authService.isAuthenticated() && tokenPayload.typeUser === expectedRole) {
        return true;
      } else {
        this.router.navigate(['/home']); 
        return false;
      }
    } else {
      this.router.navigate(['/auth']); // Điều hướng tới trang login nếu không có token
      return false;
    }
  }
}