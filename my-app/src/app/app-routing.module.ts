import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogArticleListComponent } from './blog-article-list/blog-article-list.component';
import { AboutComponent } from './about/about.component';
import { ContactformSectionComponent } from './contactform-section/contactform-section.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'portfolio',
    component: BlogArticleListComponent,
  },
  {
    path: 'kontakt',
    component: ContactformSectionComponent,
  },
  {
    path: 'omnie',
    component: AboutComponent,
  },
  {
    path: '404', 
    component: NotFoundComponent
  },
  {
    path: '**', 
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BlogArticleListComponent, AboutComponent, ContactformSectionComponent]