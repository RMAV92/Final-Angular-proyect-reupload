import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { newTweetDto, TweetDto } from '../models/dto/tweet.dto';
import { AuthService } from '../services/auth.service';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  
  isOpenNewTweet: Boolean = false; 
  tweets: TweetDto[] = [];
  newTweetForm: FormGroup = new FormGroup({
    mensaje:  new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  constructor(
    public authService: AuthService,
    private router: Router,
    private tweetService: TweetService
    ) { }

  ngOnInit(): void {
    if(!this.authService.isAuth){
      this.router.navigate(['login']);
    }
    this.loadData();
  }
  loadData(){
    this.tweetService.getAll().subscribe(
      allTweets=>{
        this.tweets= allTweets.slice(0,100)

      },
      error=>{
        console.error(error)
      }
    )
  }
  newTweet(){
    if(this.newTweetForm.valid){
      let tweet = new newTweetDto();
      tweet = Object.assign(tweet, this.newTweetForm.value)
      console.log(tweet);
      console.log(this.newTweetForm.value)
      this.tweetService.createTweet(tweet).subscribe(
        tweet=>{
          console.log(tweet)
          this.tweets.push(tweet)
        },
        error=>{
          console.log(error)
        }
      )
    }
  }
}
