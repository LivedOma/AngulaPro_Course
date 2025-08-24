import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'cdev-login',
    // template: `<h1>Login Component</h1>
    //             <p>Please enter your credentials to log in.</p>`
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']    
})
export class LoginComponent {
    constructor(private readonly router: Router) {
        console.log('LoginComponent initialized');
    }

    onLogin() {
        this.router.navigate(['/courses']);
        console.log('Login button clicked');
    }
}
