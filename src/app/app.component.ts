import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '¡Que calor hace en Madrid!';
  name = 'Ronald';

  changeTitle(){
    this.title = '¡Que venga el Otoño ya!';
  }
}
