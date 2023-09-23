import { Component, Input, OnInit } from '@angular/core';
import { blue, green, red, yellow } from 'tailwindcss/colors';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})

export class CustomButtonComponent implements OnInit {
  // ts types
  colors: {
    success: string,
    danger: string,
    warning: string,
    info: string
  }
  
  // TODO: ONLY PHOSPHOR ICONS ARE SUPPORTED
  // insert only the name of the icon (without the prefix 'ph-')
  // example: [icon]="'user'"
  @Input() icon: string = '';

  // TODO: ONLY 'left' AND 'right' ARE SUPPORTED
  @Input() icon_align: string = 'left';

  // use only pre-defined colors from this.colors
  // feel free to add more colors >:3
  @Input({required: true}) severity: keyof typeof this.colors = 'success';
  
  // additional style for the input
  // example: [style]="{border: '1px solid red'}"
  @Input() style: object = {};

  @Input({required: true}) text: string = '';
  @Input() full_size: boolean = true;

  // TODO: ONLY 'start', 'center' and 'end' ARE SUPPORTED
  @Input() button_align: string = 'start';
  
  @Input() onClick: Function = () => {
    console.log('button clicked')
  }; 

  constructor() {
    this.colors = {
      success: green[500],
      danger: red[500],
      warning: yellow[500],
      info: blue[500]
    }
  }

  ngOnInit(): void {
    console.log(this.colors)
  }
}
