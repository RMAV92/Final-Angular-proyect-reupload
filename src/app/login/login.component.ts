import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '../models/dto/login.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)])
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  
  }
  login(){
    if(this.loginForm.valid){
      let login = new LoginDto();
      login= Object.assign(login, this.loginForm.value)
      this.authService.login(login).subscribe( 
        data =>{
        console.log(data)
        if(data){
          localStorage.setItem('token', data.token);
          this.authService.isAuth= true;
          this.router.navigate([''])

        }else{
          alert('Ha ocurrido un error');
        };
        
      },
      error=>{
        alert(error.message);
        console.error(error);

      }
      );
    }
  }
  checkError(fieldName:string){
    const field = this.loginForm.controls[fieldName];
    return field.touched && field.invalid;
  }

}
