import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(): boolean {
    const memberStorage = sessionStorage.getItem('member');
    if(!memberStorage) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
  
}
