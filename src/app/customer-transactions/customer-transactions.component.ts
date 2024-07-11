import { CustomersService } from './../services/customers/customers.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../interfaces/transaction';
import { Customer } from '../interfaces/customer';
import { TransactionsService } from '../services/transactions/transactions.service';

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.scss']
})
export class CustomerTransactionsComponent implements OnInit {
  searchText = '';
  searchAmount: number | undefined = undefined;
  gettingTransactions = false;

  customers: Customer[] = [];
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];

  constructor(
    private http: HttpClient,
    private customersService: CustomersService,
    private transactionsService: TransactionsService
  ) { }

  getCustomers() {
    this.customersService.getCustomers().subscribe(customers => {
      console.log('Customers:', customers);
      this.customers = customers;
    }, error => {
      console.error('Error fetching customers:', error);
    });
  }

  getTransactions() {
    this.transactionsService.getTransactions().subscribe(transactions => {
      console.log('Transactions:', transactions);
      this.transactions = transactions;
      this.filteredTransactions = [...this.transactions];
    }, error => {
      console.error('Error fetching transactions:', error);
    });
  }

  ngOnInit(): void {
    this.getCustomers();
    this.getTransactions();
  }

  getCustomerName(id: number) {
    return this.customers.find(c => c.id === id)?.name;
  }

  getAllTransactions() {
    this.filteredTransactions = this.transactions.filter(transaction => {
      const customerName = this.getCustomerName(transaction.customer_id)?.toLowerCase() || '';
      const matchesName = customerName.includes(this.searchText.toLowerCase());
      const matchesAmount = this.searchAmount ? transaction.amount === +this.searchAmount : true;
      return matchesName && matchesAmount;
    });
  }
}