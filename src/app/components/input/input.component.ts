import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
// @ts-ignore
import anime from 'animejs/lib/anime';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';

  errorMessages: Record<string, string> = {
    required: "Campo obrigatório",
    email: "O e-mail é inválido",
  }


}
