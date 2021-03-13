import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-article-list',
  templateUrl: './blog-article-list.component.html',
  styleUrls: ['./blog-article-list.component.less']
})
export class BlogArticleListComponent implements OnInit {

  portfolioItems: any = [
    {
      id: 1,
      title: "Age of Empires - units Calc",
      href: '/portfolio/aoe-units-calc',
      img: '/assets/img/portfolio/aoe-calc.jpg',
      description: 'Kalkulator możliwych do wyprodukowania jednostek na podstawie publicznego API'
    },
    {
      id: 2,
      title: "Age of Empires - units Calc",
      href: '/portfolio/aoe-units-calc',
      img: '/assets/img/portfolio/aoe-calc.jpg',
      description: 'Kalkulator możliwych do wyprodukowania jednostek na podstawie publicznego API'
    },
    {
      id: 3,
      title: "Age of Empires - units Calc",
      href: '/portfolio/aoe-units-calc',
      img: '/assets/img/portfolio/aoe-calc.jpg',
      description: 'Kalkulator możliwych do wyprodukowania jednostek na podstawie publicznego API'
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
