import { Component } from '@angular/core';
import { apilib } from '@SVIS/apilib';
@Component({
  selector: 'SVIS-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inspection';
  constructor(private Apilib: apilib) {
    this.title = this.Apilib.hello();
  }
}
