import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'basket of baby beavers';
  imgSrc: string = 'https://images.foxtv.com/static.fox9.com/www.fox9.com/content/uploads/2022/06/932/524/baby-beavers-edit1.jpg?ve=1&tl=1';

  constructor(){
  }
}
