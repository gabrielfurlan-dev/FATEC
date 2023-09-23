import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
})

export class CustomInputComponent implements OnInit {
  // TODO: ONLY PHOSPHOR ICONS ARE SUPPORTED
  // insert only the name of the icon (without the prefix 'ph-')
  // example: [icon]="'user'"
  @Input({required: true}) icon: string = '';
  @Input() input_type: string = 'text';
  @Input({required: true}) input_placeholder: string = '';
  @Input({required: true}) input_id: string = '';


  // additional style for the input
  // example: [input_style]="{border: '1px solid red'}"
  @Input() input_style: any = {};
  

  // angular signals (react state similar)
  show_password = signal(false);

  togglePasswordVisibility() {
    this.show_password.set(!this.show_password());
  }
  
  constructor() {
    // 
  }

  ngOnInit(): void {
    // console.log(this.input_type);
  }
}
