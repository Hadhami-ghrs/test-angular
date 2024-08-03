import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  form:FormGroup
  filename: string='';
  show: boolean=false;
  message: string='';
  constructor(private fb:FormBuilder, private userservice:UserService){
    this.form=this.fb.group({
      name:this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['' ,Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['' ,Validators.required],


      }),
      password:this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
       }
      , {
        validator: this.passwordMatchValidator
    
      }
    )
    })
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get(' confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  ngOnInit(): void {
    
  }
  submit(){
  let user :User= new User()
  user.firstName=this.form.value.name?.firstName
  user.lastName=this.form.value.name?.lastName
  user.email=this.form.value.name?.email
  user.password=this.form.value.password?.password
  user.username=  user.email
  user.role=  this.form.value.name?.role


    this.userservice.createUser(user).subscribe(data=>{
      this.show=true
      this.message =" votre  user avec success"
      console.log('data',data)
    })

  }
}
