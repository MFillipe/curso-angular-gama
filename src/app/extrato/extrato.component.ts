import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

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

  page: number = 1;

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit(): void {
    this.loadExtrato();
  }

  loadExtrato() {
    this.isLoading = true;
    this.errorLoading = false;

    //const page = 1;

    this.extratoService.getTransactions(this.page)
    .pipe(
      finalize(() => this.isLoading = false)
    )
    .subscribe(response => 
      this.onSuccess(response), 
      error => this.onError(error)
    );
  }

  onSuccess(response: Transaction[]) {
    this.transactions = response;
  }

  onError(error: any) {
    this.errorLoading = true;
  }

  backPage() {
    this.page = this.page - 1;
    this.loadExtrato();
  }

  nextPage() {
    this.page = this.page + 1;
    this.loadExtrato();
  }

}
