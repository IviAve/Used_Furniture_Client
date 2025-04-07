
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Comment } from './../types/comments';
import { LoaderComponent } from './../shared/loader/loader.component';
import { ElapsedTimePipe } from '../shared/pipes/elapsed-time.pipe';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [LoaderComponent, ElapsedTimePipe],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent  implements OnInit{

  comments: Comment[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getComments(5).subscribe((comments) => {
      this.comments = comments;
      this.isLoading = false;
    });
  }
}
