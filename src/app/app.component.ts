import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '¡Que calor hace en Madrid!';
  name = 'Ronald';
  cities = ['Ribadesella', 'Gijon', 'Santander', 'Llanes'];
  cityName = '';

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

}
