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
    displayName: "John Smith",
    email: 'john.smith@bioage.com',
    dateOfLatestImaging: new Date('03/27/2023'),
    nextAssessmentDate: new Date('2023-09-16T12:00:00Z'),
    choronologicalAge: 51,
    biologicalAge: 68,
    refNo: 'RD12345',
    phone: '0211234567',
    country: 'USA',
  } as UserModel;
  constructor(private router: Router) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.isLogin = true;
      this.loginSub.next(true);
    }
  }

  getUser() {
    if (!this.isLogin) {
      return null;
    }
    return this.user;
  }
  login() {
    this.isLogin = true;
    this.loginSub.next(true);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('user');
    this.isLogin = false;
    this.loginSub.next(false);
    this.router.navigate(['auth']);
  }
}
