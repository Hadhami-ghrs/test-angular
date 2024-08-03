import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginform = this.fb.group({
      type: ['local', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: [false]
    });
  }

  onSubmit(): void {
    if (this.loginform.valid) {
      console.log(this.loginform.value);
    }
  }
}

