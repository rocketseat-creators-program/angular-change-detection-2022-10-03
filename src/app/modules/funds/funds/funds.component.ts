import { Component } from '@angular/core';
import { FundInterface } from '../fund.interface';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent {

  funds: FundInterface[];

  constructor() {
    this.funds = [
      {
        name: 'VISC11',
        dailyLiquidity: 21103,
        equityValue: 114.67,
        pVp: 0.97
      },
      {
        name: 'HSML11',
        dailyLiquidity: 30282,
        equityValue: 98.07,
        pVp: 0.96
      },
      {
        name: 'BTLG11',
        dailyLiquidity: 36728,
        equityValue: 98.82,
        pVp: 1.04
      },
      {
        name: 'VINO11',
        dailyLiquidity: 20245,
        equityValue: 54.11,
        pVp: 0.92
      }
    ]
  }

  doNothing(): void {
    console.log('Doing nothing!');
  }
}
