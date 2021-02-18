import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: string;
  @Output() clicado = new EventEmitter();

  imageURL: string = 'https://i0.wp.com/paradoxalnews.com/wp-content/uploads/2020/05/valorant-thumb-wallpaper-1920x1080-1.jpg?ssl=1';
  
  initialValue : string = 'Valor inicial';

  isDisabled: boolean = true;

  accessibilityText: string = 'Texto acessível';

  valorDoInput: string = '';

  valorContador: number = 10;
  
  constructor() { 
    setTimeout(() => {
      console.log('isDisabled: ', this.isDisabled);
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

  getImageURL() {
    return this.imageURL;
  }

  onClick($event) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse() {
    console.log('alguem passou o mouse.');
  }

  onClickBotaoEmissor($event) {
    console.log('Devo emitir informações para o componente pai.');
    this.clicado.emit(true);
  }

  // onValorAtualizadoContador(novoValor) {
  //   this.valorContador = novoValor;
  //   console.log('onValorAtualizadoContador: ', novoValor);
  // }

}
