
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.css']
})

export class CustomTextareaComponent implements OnInit {
  @Input({required: true}) input_placeholder: string = '';

  // additional style for the input
  // example: [input_style]="{border: '1px solid red'}"
  @Input() input_style: any = {};
  
  constructor() {
    // 
  }

  ngOnInit(): void {
    // console.log(this.input_type);
  }
}
