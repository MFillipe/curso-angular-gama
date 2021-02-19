import { Component, OnInit } from '@angular/core';

import { Transaction } from './extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transactions: Transaction[];

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit(): void {
    this.extratoService.getTransactions().subscribe(response => {
      this.transactions = response;
    });
  }

}
