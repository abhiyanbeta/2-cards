import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    { 
      title: 'Snowy mounthat',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover5',
      content: 'heres a pic of a snowy mountain'
    },
    { 
      title: 'mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biker1212',
      content: 'I did some biking today'
    }
  ];
}
