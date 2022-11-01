import { Component, Input, AfterContentInit, ViewChild } from '@angular/core';
import * as ConvertUnits from 'convert-units';

@Component({
  selector: 'conversion',
  templateUrl: './conversion.component.html',
})
export class ConversionComponent {
  public valFrom: number;
  private valFromUnit: number;
  private valTo: number;
  private valToUnit: number;
  private leftToRight: boolean;

  @Input() measurements: {
    abbr: string;
    measure: string;
    system: string;
    singular: string;
    plural: string;
  };

  @ViewChild('left') left;
  @ViewChild('right') right;

  ngAfterContentInit() {
    console.log('measurements ', this.measurements);
    this.valFromUnit = this.measurements[0].abbr;
    this.valToUnit = this.measurements[1].abbr;
    this.calculate();
  }

  ngAfterContentChecked() {
    this.calculate();
  }

  private setToUnit(unit) {
    this.valToUnit = unit;
    this.calculate();
  }

  private setFromUnit(unit) {
    this.valFromUnit = unit;
    this.calculate();
  }

  private calculate() {
    if (this.left.nativeElement.value !== '') {
      let cu, value;
      const left = this.left.nativeElement.value,
        right = this.right.nativeElement.value;
      if (this.leftToRight) {
        cu = new ConvertUnits.default(this.valFrom);
        this.valTo = cu.from(left).to(right);
      } else {
        cu = new ConvertUnits.default(this.valTo);
        this.valFrom = cu.from(right).to(left);
      }
    }
  }
}
