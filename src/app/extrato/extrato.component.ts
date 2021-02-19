import { Component, OnInit } from '@angular/core';

import { Transaction } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transactions: Transaction[];

  isLoading: boolean = false;

  errorLoading: boolean = false;

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit(): void {
    this.loadExtrato();
  }

  loadExtrato() {
    this.isLoading = true;
    this.errorLoading = false;

    this.extratoService.getTransactions().subscribe(response => {
      this.isLoading = false;
      this.transactions = response;
    }, 
      error => {
      this.isLoading = false;
      this.errorLoading = true;
    });
  }

}
