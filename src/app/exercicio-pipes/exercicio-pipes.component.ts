import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss'],
  providers: [
    DecimalPipe
  ]
})
export class ExercicioPipesComponent implements OnInit {

  movie = {
    title: 'Now you see me',
    score: 4.90212213,
    priceRent: 12.85,
    dataPreview: new Date(2020, 9, 5)
  };

  buying: any[] = [{
    product: 'Mouse Razer',
    value: 299.29,
    amount: 2,
    weight: 0,
    date: new Date(2020, 1, 1, 15, 20),
  }, 
  {
    product: 'Keyboard keyChron K2',
    value: 799.29,
    amount: 1,
    weight: 145.5554421,
    date: new Date(2020, 1, 10, 19, 30),
  }]

  constructor(
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
  }

  getWeightFormat(weight: number) {
    if (weight <= 0) {
      return 'no weight';
    }
    return this.decimalPipe.transform(weight, '1.1-2') + ' Kg';
  }

}
