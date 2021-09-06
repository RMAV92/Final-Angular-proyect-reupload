import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newTweetDto, TweetDto } from '../models/dto/tweet.dto';

const apiUrl = 'https://www.minitwitter.com:3001/apiv1/tweets';


@Injectable({
  providedIn: 'root'
})
export class TweetService {
  defaultHeaders = {}

  constructor(private http: HttpClient) {

    this.defaultHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

  }
  getAll():Observable<TweetDto[]>{
    this.defaultHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })}
    return this.http.get<TweetDto[]>(`${apiUrl}/all`, this.defaultHeaders);
  }
  addLike(id:string):Observable<TweetDto>{
    this.defaultHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })}
    let item = {code:"UDEMYANDROID"}
    return this.http.post<TweetDto>(`${apiUrl}/like/${id}`,item, this.defaultHeaders);
  }
  createTweet(newTweet:newTweetDto):Observable<TweetDto>{
    this.defaultHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })}
    return this.http.post<TweetDto>(`${apiUrl}/create`,newTweet, this.defaultHeaders);
  }

}
