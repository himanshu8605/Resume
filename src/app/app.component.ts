import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
})
export class AppComponent {
  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }
}
