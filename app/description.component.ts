import { Component, Input } from '@angular/core';
import * as ConvertUnits from 'convert-units';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class DescriptionComponent {
  plural: string = '';

  @Input() options: {
    abbr: string,
    measure: string,
    system: string,
    singular: string,
    plural: string
  };

  constructor() {
    this.plural = `4`;
  }

}
