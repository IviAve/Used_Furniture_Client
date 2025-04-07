
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Transport } from '../../types/transport';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';
import { UserForAuth } from '../../types/user';
import { DatePipe, UpperCasePipe } from '@angular/common';

import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

import { LoaderComponent } from '../../shared/loader/loader.component';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';

@Component({
  selector: 'app-details-transport',
  standalone: true,
  imports: [RouterLink,HomeComponent,UpperCasePipe, DatePipe,LoaderComponent,ErrorMsgComponent],
  templateUrl: './details-transport.component.html',
  styleUrl: './details-transport.component.css'
})

export class DetailsTransportComponent implements OnInit {

  transport = {} as Transport;
  user = {} as UserForAuth;
  // comments: any[] = [];
  // newComment: string = ''; 
  isOwner: boolean = false;
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService,
    private router: Router,
    private errorMsgService: ErrorMsgService
  ) {
    this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get getTransportId(): string {
    return this.route.snapshot.params['transportId'];
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  get isLiked(): boolean {
    return this.transport.subscribers.some(el => el == this.userService.user?._id);
  }

  ngOnInit(): void {
    const transportId = this.route.snapshot.params['transportId'];
  
    this.apiService.getSingleTransport(transportId).subscribe((transport) => {
      this.transport = transport;
      this.isLoading = false;
      console.log('Transport data:', this.transport); // Логване на данните за мебелта
  
      // Проверка за наличието на userId
      if (this.transport && this.transport.userId) {
        console.log('Transport userId:', this.transport.userId);
      } else {
        console.log('Furniture or userId is not available');
      }
  
      if (this.userService.isLogged && this.userService.user?._id) {
        // Проверка дали текущият потребител е собственик
        this.isOwner = this.transport.userId._id === this.userService.user._id;
        console.log('Is owner:', this.isOwner); // Логване на резултата от проверката
      }
    });
  }



  delete(): void {
    const confirmDelete = confirm('Are you sure you want to delete this transport?');
    if (!confirmDelete) return;
  
    const transportId = this.getTransportId;
  
    this.apiService.deleteTransport(transportId).subscribe({
      next: () => {
        alert('Transport deleted successfully!');
        this.hasError = false;
        this.errorMsgService.clearError();
        this.router.navigate(['/catalog-transport']);
      },
      error: (err) => {
        this.hasError = true;
        console.error('Error deleting transport:', err);
        alert('Failed to delete transport. Please try again later.');
      }
    });
  }

  onLike(event: Event) {
    event.preventDefault();
    const id = this.route.snapshot.params['transportId'];
    this.apiService.likeTransport(id).subscribe({
      next: () => {
        this.hasError = false;
        this.errorMsgService.clearError();
        this.router.navigate(['/catalog-transport']);
      },
      error: () => {
        this.hasError = true;
      },
      
    });
  }
  
  // loadComments(transportId: string): void {
  //   this.apiService.getComments(transportId).subscribe({
  //     next: (comments) => {
  //       this.comments = comments;
  //       console.log('Comments loaded:', this.comments);
  //     },
  //     error: (err) => {
  //       console.error('Error loading comments:', err);
  //     }
  //   });
  // }
  

  // addComment(event: Event): void {
  //   event.preventDefault(); // Спира презареждането на страницата
  
  //   if (!this.newComment.trim()) {
  //     alert('Comment cannot be empty.');
  //     return;
  //   }
  
  //   const transportId = this.getTransportId;
  
  //   this.apiService.addComment(transportId, this.newComment).subscribe({
  //     next: (comment) => {
  //       this.comments.push(comment); // Добавяне на новия коментар в списъка
  //       this.newComment = ''; // Изчистване на полето
  //       console.log('Comment added:', comment);
  //     },
  //     error: (err) => {
  //       console.error('Error adding comment:', err);
  //       alert('Failed to add comment. Please try again.');
  //     }
  //   });
  // }
  
   }

  
