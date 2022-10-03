import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundsRoutingModule } from './funds-routing.module';
import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds/funds.component';


@NgModule({
  declarations: [
    FundComponent,
    FundsComponent
  ],
  imports: [
    CommonModule,
    FundsRoutingModule
  ]
})
export class FundsModule { }
