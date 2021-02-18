import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title: string = 'Nubank';

  pudim: string = 'Ferrari';

  showHeader: boolean = true;

  constructor() {}
  
  ngOnInit() {}

  eventoRecebido($event) {
    console.log('AppComponent: EVENTO RECEBIDO!', $event);
  }

}
