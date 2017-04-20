import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public val=true;
  public items:string[]=["Fairfield","London","Newyork"];
  title = 'app works!';
}
