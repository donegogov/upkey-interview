import { Component, Input, OnInit } from '@angular/core';
import { NewsFeedStories } from '../_models/news-feed-stories';

@Component({
  selector: 'app-news-feed-item',
  templateUrl: './news-feed-item.component.html',
  styleUrls: ['./news-feed-item.component.css']
})
export class NewsFeedItemComponent implements OnInit {
  @Input() userName: string;
  newsFeedStories: Array<NewsFeedStories> = new Array<NewsFeedStories>();
  changeDateTimeFormat: Array<boolean> = new Array();
  favorite: Array<string> = new Array();

  constructor() { }

  ngOnInit() {
    this.userName = 'All';
    this.newsFeedStories = [
    {
      username: 'Valentina Gogova',
      type: 'X added Y as a friend',
      date: new Date('Jun 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Blagoj Gogov',
      type: 'X added Y as a friend',
      date: new Date('Sep 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Vasil Gogov',
      type: 'X added Y as a friend',
      date: new Date('Jun 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Aleksandar Gjorgjiev',
      type: 'X added Y as a friend',
      date: new Date('Sep 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Vasko Mitrovski',
      type: 'X added Y as a friend',
      date: new Date('Jun 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Valentina Gogova',
      type: 'Pliked Z item',
      date: new Date('Sep 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Blagoj Gogov',
      type: 'Pliked Z item',
      date: new Date('Jun 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Vasil Gogov',
      type: 'Pliked Z item',
      date: new Date('Sep 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Aleksandar Gjorgjiev',
      type: 'Pliked Z item',
      date: new Date('Jun 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Vasko Mitrovski',
      type: 'Pliked Z item',
      date: new Date('Sep 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Valentina Gogova',
      type: 'T uploaded anew photo',
      date: new Date('Jun 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Blagoj Gogov',
      type: 'T uploaded anew photo',
      date: new Date('Sep 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Vasil Gogov',
      type: 'T uploaded anew photo',
      date: new Date('Jun 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Aleksandar Gjorgjiev',
      type: 'T uploaded anew photo',
      date: new Date('Sep 10, 2020, 8:00:00 AM')
    },
    {
      username: 'Vasko Mitrovski',
      type: 'T uploaded anew photo',
      date: new Date('Jun 10, 2020, 8:00:00 AM')
    }
    ];

    for (let i = 0; i < this.newsFeedStories.length; i++) {
      this.changeDateTimeFormat.push(false);
    }

    for (let i = 0; i < this.newsFeedStories.length; i++) {
      this.favorite.push('No');
    }
  }

  changeDateTimeFormatMouseOver(index: number) {
    this.changeDateTimeFormat[index] = true;
  }

  changeDateTimeFormatMouseOut(index: number) {
    this.changeDateTimeFormat[index] = false;
  }

  favoriteYesNo(index: number) {
    if (this.favorite[index] == 'No') {
      this.favorite[index] = 'Yes';
    }
    else if (this.favorite[index] == 'Yes') {
      this.favorite[index] = 'No';
    }
  }

}
