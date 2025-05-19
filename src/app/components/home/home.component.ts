import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  listNews:any;

  constructor(private nwesService: NewsService) {
    this.getNews();

  }

  getNews() {
    this.nwesService.getNews().subscribe({
      next: (result) => {
        this.listNews = result.results;
        console.log(this.listNews);
      },
      error: (error) => {
        console.error('Error fetching news:', error);
      }
    })
  }

}
