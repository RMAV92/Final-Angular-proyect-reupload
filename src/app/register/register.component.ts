import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from '../models/dto/register.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)])
  })
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
      let register = new RegisterDto();
      register = Object.assign(register, this.registerForm.value);

      this.authService.register(register).subscribe(
        data =>{
          localStorage.setItem('token', data.token);
          this.authService.isAuth= true;
          this.router.navigate(['']);          
        },
        error =>{
          console.error(error)
        }
      )
    }
  }
  checkError(fieldName:string){
    const field= this.registerForm.controls[fieldName];
    return field.touched && field.invalid;
  }

}
