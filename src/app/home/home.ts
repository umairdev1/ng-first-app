import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string = 'Synzur';
  navList: string[] = ['Home', 'Service', 'About', 'Contact Us'];
}
