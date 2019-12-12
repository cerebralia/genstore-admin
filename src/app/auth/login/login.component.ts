import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';

@Component({
	templateUrl: 'login.component.html'
})
export class LoginComponent {
	Auth: AuthService;
	credentials = {
		email: 'admin@example.com',
		password: 'admin'
	};

	constructor(auth: AuthService, public router: Router) {
		this.Auth = auth;

		if (auth.isLoggedin()) {
			this.router.navigate(['/starter']);
		}
	}

	login() {
		console.log('credentials', this.credentials);
		this.Auth.login(this.credentials).then(() => this.router.navigate(['/starter']))
			.catch(() => alert('Something went wrong, please try again!'));
	}
}
