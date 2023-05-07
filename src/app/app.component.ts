import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjetoRegistroPonto';
  formGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  usersList: any [] = [
    {
      name: 'Ebertton Abreu Rodrigues',
      email: 'eberttonrodrigues@gmail.com',
    },
    {
      name: 'Karol Sampaio',
      email: 'karol@gmail.com',
    }
  ];
  headArray = [
    {'Head': 'User Name', 'FieldName': 'name' },
    {'Head': 'Email', 'FieldName': 'email' },
    {'Head': 'Action', 'FieldName': '' }
  ];
  toggler = ''
  recebeInformacao(toggler: string){
    if (this.toggler === 'sidebar-wrapper__sb-sidenav-toggled'){
      this.toggler = ''
    }else{
      this.toggler = toggler;
    }
  }


  ngOnInit() {

  }
  editUser(item: any) {
    debugger;
  }
  deleteUser(item: any) {
    debugger;
  }
}
