import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-article-list',
  templateUrl: './blog-article-list.component.html',
  styleUrls: ['./blog-article-list.component.less']
})
export class BlogArticleListComponent implements OnInit {

  articles: any;

  API_KEY: string = 'c2d9dbc3b59d433ba0396bfb8e527bbb';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let res = this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`);
    res.subscribe((data) => {
      this.articles = data;
    });
  }
}
