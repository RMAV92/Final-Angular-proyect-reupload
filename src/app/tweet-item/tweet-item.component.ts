import { Component, Input, OnInit } from '@angular/core';
import { TweetDto } from '../models/dto/tweet.dto';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.css']
})
export class TweetItemComponent implements OnInit {
  isFavorite = false;
  @Input() tweetItem: TweetDto= new TweetDto();

  constructor(
    private tweetService: TweetService
  ) { }

  ngOnInit(): void {
    if(this.tweetItem.user.photoUrl === ''){
      this.tweetItem.user.photoUrl = 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    }
  }
  addLike(id:string):void{
    this.tweetService.addLike(id).subscribe(
      tweetUpdate=>{
        console.log(tweetUpdate)
        this.tweetItem.likes = tweetUpdate.likes;
      },
      error=>{
        console.log(error)

      }
    )

  }

}
