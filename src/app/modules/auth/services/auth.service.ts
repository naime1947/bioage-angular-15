import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginSub = new BehaviorSubject<boolean>(false);
  loginChanged$ = this.loginSub.asObservable();
  private isLogin = false;
  private user = {
    id: '00001',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@bioage.com',
  } as UserModel;
  constructor(private router: Router) {}

  getUser() {
    if (!this.isLogin) {
      return null;
    }
    return this.user;
  }
  login() {
    this.isLogin = true;
    this.loginSub.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.isLogin = false;
    this.loginSub.next(false);
    this.router.navigate(['auth']);
  }
}
