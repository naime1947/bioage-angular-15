import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

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
  constructor() {}

  getUser() {
    if (!this.isLogin) {
      return null;
    }
    return this.user;
  }
  login() {
    this.isLogin = true;
    this.loginSub.next(true);
  }

  logout() {
    this.isLogin = false;
    this.loginSub.next(false);
  }
}
