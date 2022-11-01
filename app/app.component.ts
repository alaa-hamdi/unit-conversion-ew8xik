import { Component } from '@angular/core';
import * as ConvertUnits from 'convert-units';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  descriptions: {
    abbr: string;
    measure: string;
    system: string;
    singular: string;
    plural: string;
  }[] = [];

  private activeDescription: {
    abbr: string;
    measure: string;
    system: string;
    singular: string;
    plural: string;
  }[] = [];

  private measures: string[];
  private selectedMeasure: string;

  groupedDesciptions = [];

  constructor() {
    const cu = new ConvertUnits.default(1);
    console.log(cu.measures());
    let html = '';
    cu.possibilities().map((unit, i) => {
      const desc = cu.describe(unit);
      this.descriptions.push(desc);
    });
    this.descriptions.forEach((elm) => {
      if (!this.groupedDesciptions.some((e) => e === elm.measure))
        this.groupedDesciptions.push(elm.measure);
    });

    console.log('descriptions ', this.descriptions);

    this.measures = cu.measures().sort();
    this.selectedMeasure = this.measures[0];
    this.setActiveDescriptions();
  }

  private setActiveDescriptions() {
    this.activeDescription = this.descriptions.filter(
      (d) => d.measure === this.selectedMeasure
    );
  }

  private setMeasure(option) {
    this.selectedMeasure = option;
    this.setActiveDescriptions();
  }
}
