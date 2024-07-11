import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTransactionsComponent } from './customer-transactions.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RouterModule, Routes } from '@angular/router';
import { TransactionGraphComponent } from './transaction-graph/transaction-graph.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerTransactionsComponent,
  },
  {
    path: ':id',
    component: TransactionGraphComponent
  }
];


@NgModule({
  declarations: [CustomerTransactionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NzTableModule,
    NzDividerModule,
    NzInputModule
  ]
})
export class CustomerTransactionsModule { }
