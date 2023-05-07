import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  toppings = new FormControl('');


  @Output() evento = new EventEmitter<string>()
  togglerMenu(){
    this.evento.emit('sidebar-wrapper__sb-sidenav-toggled');
  }
}
