import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { 
      title: 'Funky tree',
      imageUrl: 'assets/tree.jpg',
      username: 'naturelover4',
      content: 'I saw this cool looking tree today during my hike!'
    },
    { 
      title: 'Mount everest',
      imageUrl: 'assets/mountain.jpg',
      username: 'mountainlover5',
      content: 'Descending Mt. Kala Patthar (5644m) to Gorakshep I could take some pictures of the sunset over Mt. Everest (middle), Nuptse and Changtse.'
    },
    { 
      title: 'Mountain biking',
      imageUrl: 'assets/biking.jpg',
      username: 'chrishenryphoto',
      content: 'Mountain biking today in Park City, UT, USA.'
    }
  ];
}
