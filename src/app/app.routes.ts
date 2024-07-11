import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./customer-transactions/customer-transactions.module').then(m => m.CustomerTransactionsModule)
    }
];
