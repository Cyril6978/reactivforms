import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model: User = new User("", "", "", "");
  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
  }
  
}
export class User {
  constructor(
      public email: string,
      public firstName: string,
      public lastName: string,
      public passWord: string
  ) {}
}
