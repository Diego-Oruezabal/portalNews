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

  constructor(private newsService: NewsService) {
    this.getNews();

  }

  getNews() {
    this.newsService.getNews().subscribe({
      next: (result) => {
        this.listNews = result.results;
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
        return this.getNews();
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

  showError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}


