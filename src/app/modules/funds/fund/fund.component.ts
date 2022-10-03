import { Component, Input } from '@angular/core';
import { FundInterface } from '../fund.interface';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent {

  @Input('fund')
  fundProps!: FundInterface;

  constructor() { }

  testingRendering(): boolean {
    console.log('Testing Render');
    return true;
  }

  changeFundName(): void {
    this.fundProps.name = 'RTST11';
  }

}
