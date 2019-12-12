import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public accessToken: string = null;
  public currentUser = null;

  constructor(private restangular: Restangular) { }

  getCurrentUser() {
    if (this.currentUser) {
      return new Promise(resolve => resolve(this.currentUser));
    }

    return this.restangular.one('users', 'me').get().toPromise()
      .then((resp) => {
        this.currentUser = resp.data;

        return resp.data;
      });
  }

  login(credentials: any): Promise<any> {
    return this.restangular.all('auth/login')
      .post(credentials).toPromise()
      .then((resp) => {
        localStorage.setItem('accessToken', resp.data.token);
        console.log('resp', resp);
        this.currentUser = {
          _id: '5df09102f596ba6870bcc02d',
          role: 'admin',
          provider: 'local',
          avatar: '',
          type: 'user',
          isActive: true,
          emailVerified: true,
          phoneNumber: '',
          phoneVerified: false,
          address: '',
          isShop: false,
          name: 'Admin',
          email: 'admin@example.com',
          createdAt: '2019-12-11T06:47:30.802Z',
          updatedAt: '2019-12-11T06:47:30.802Z',
        };

        if (this.currentUser.role !== 'admin') {
          this.removeToken();
        }

        localStorage.setItem('isLoggedin', 'yes');
        return this.currentUser;
      });
  }

  getAccessToken(): any {
    if (!this.accessToken) {
      this.accessToken = localStorage.getItem('accessToken');
    }

    return this.accessToken;
  }

  forgot(email: string): Promise<any> {
    return this.restangular.all('auth/forgot').post({ email }).toPromise();
  }

  removeToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLoggedin');
  }

  isLoggedin() {
    return localStorage.getItem('isLoggedin') === 'yes';
  }
}
