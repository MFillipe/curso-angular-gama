import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title: string = 'Welcome';

  pudim: string = 'Ferrari';

  constructor() {
    setTimeout(() => {
      return this.title = 'Welcome guys!! =)';
    }, 5000);
  }

  eventoRecebido($event) {
    console.log('AppComponent: EVENTO RECEBIDO!', $event);
  }

}
