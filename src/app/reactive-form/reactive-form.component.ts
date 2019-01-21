import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators ,AbstractControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private router:Router) { }
  signup = new FormGroup({
    fullname: new FormControl('John Doe',Validators.required),

    credentials: new FormGroup({
    username: new FormControl('',[
      Validators.required,
      this.spaceNotAllowed
    ]),
      
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ])
    }),
    skills: new FormArray([])

  });


  get fullname() { return this.signup.get('fullname'); }
  get username() { return this.signup.get('credentials.username'); }
  get email() { return this.signup.get('credentials.email'); }
  get password() { return this.signup.get('credentials.password'); }
  get skills() { return this.signup.get('skills') as FormArray; }
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signup);
  }
  onSend(){
    this.router.navigate(['/Practhttp']);
  }

  spaceNotAllowed(control:AbstractControl): {[s: string]:boolean} | null{
      if((control.value as string).indexOf(' ') >= 0)
      return { spaceNotAllowed: true }

      return null
  }

  addSkill(skl: HTMLInputElement){
    if((skl.value as string).length > 0 )
    (this.signup.get('skills') as FormArray ).push(new FormControl(skl.value));
    skl.value = '';
  }

}

