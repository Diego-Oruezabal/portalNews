import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  listNews:any;

  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/?has_event=false&has_launch=false&limit=10';

  next:any;
  previous:any;

  constructor(private newsService: NewsService) {
    this.getNews(this.apiUrl);

  }

  getNews(url:any) {
    this.newsService.getNews(url).subscribe({
      next: (result) => {
        this.listNews = result.results;
        this.next = result.next;
        this.previous = result.previous;
        console.log(this.listNews);
      },
      error: (error) => {
        this.showError();
        console.error('Error fetching news:', error);
      }
    })
}


    searchNews(query: string) {

      if(query.length === 0) {
        return this.getNews(this.apiUrl);
      }


      this.newsService.search(query).subscribe({
        next: (result) => {
          this.listNews = result.results;
          console.log(this.listNews);
        },
        error: (error) => {
          this.showError();
          console.error('Error searching news:', error);
        }
      })
  }


  orderingByTitle() {
    this.newsService.orderingByTitle().subscribe({
      next: (result) => {
        this.listNews = result.results;
        console.log(this.listNews);
      },
      error: (error) => {
        this.showError();
        console.error('Error ordering news:', error);
      }
    });
  }

  showError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}


