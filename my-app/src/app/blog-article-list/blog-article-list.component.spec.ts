import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleListComponent } from './blog-article-list.component';

describe('BlogArticleListComponent', () => {
  let component: BlogArticleListComponent;
  let fixture: ComponentFixture<BlogArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogArticleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
