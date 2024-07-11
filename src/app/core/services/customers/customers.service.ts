import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }
}
