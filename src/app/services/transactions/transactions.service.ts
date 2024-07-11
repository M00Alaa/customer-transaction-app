import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get<Transaction[]>('http://localhost:3000/transactions');
  }
}
