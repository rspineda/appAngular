import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '¡Que calor hace en Madrid!';
  name = 'Ronald';
  cities: string[] = ['Ribadesella', 'Gijon', 'Santander', 'Llanes'];
  cityName = '';

  users: User[] = [
    {
      name: 'Ronald',
      age: 32 ,
      isSingle: false,
      avatar: 'assets/images/img1.jpg'
    },
    {
      name: 'Stivens',
      age: 29 ,
      isSingle: true,
      avatar: 'assets/images/img2.jpg'
    },
    {
      name: 'Pelusa',
      age: 11 ,
      isSingle: true,
      avatar: 'assets/images/img3.jpg'
    }
  ];


  changeTitle(){
    this.title = '¡Que venga el Otoño ya!';
  }

  addCity(){
    this.cities.push(this.cityName);
    this.cityName = '';
  }

  emptyCities(){
    this.cities = [];
  }

  deleteItem(index: number){
    this.cities.splice(index, 1);
  }

  updateItem(index: number){
    this.cities[index] = 'actualizado';
  }

}
