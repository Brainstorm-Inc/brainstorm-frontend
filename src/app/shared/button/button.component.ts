import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonType, ColorType} from "./types";



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {

  ColorType = ColorType
  ButtonType = ButtonType
  @Input() colorType: ColorType = ColorType.secondary;
  @Input() type: ButtonType = ButtonType.filled;
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClick(event: Event)
  {
    console.log("click - button");
    if (!this.disabled)
      console.log("click emit");
    else
    {
      console.log("stop");
      event.stopPropagation();
    }
  }

}
