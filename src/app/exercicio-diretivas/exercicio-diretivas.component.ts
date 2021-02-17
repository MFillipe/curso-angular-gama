import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent implements OnInit {

  isTrue: boolean = false;

  fruitList: any[] = ['Banana', 'Watermelon', 'Orange', 'Lemon', 'Avocado'];

  carList: any[] = [{
    car: 'Ferrari',
    model: '2020',
    color: 'Red'
    },
    {
      car: 'Mustang',
      model: '1998',
      color: 'Black'
    },
    {
      car: 'Lamborghini',
      model: '2017',
      color: 'Green'
    },
    {
      car: 'Jaguar',
      model: '2021',
      color: 'Blue'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.isTrue = !this.isTrue;
  }


  sum(number1, number2) {
    return number1 + number2;
  }



}
