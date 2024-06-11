import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  error: string | null = null;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.error = null;

//Dang nhap
this.authService.signIn(email,password).subscribe((res: any) => {
  this.authService.setToken(res.accessToken);
  console.log(this.authService.getToken());
  },
  error=>{

console.log(error);
this.error = error.error.message;
}
)
//end dang nhap

    // Đăng ký
    this.authService.signUp(email, password).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
        this.error = error.error.message;
      }
    );

    // Reset form
    form.reset();
  }
  Ư
}