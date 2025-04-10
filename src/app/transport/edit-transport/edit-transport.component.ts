
import { RouterLink } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transport } from '../../types/transport';
import { UserService } from '../../user/user.service';
import { ImageUrlDirective } from '../../directives/image-url.directive';

import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

import { LoaderComponent } from '../../shared/loader/loader.component';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';

@Component({
  selector: 'app-edit-transport',
  standalone: true,
  imports: [FormsModule, ImageUrlDirective,ErrorMsgComponent],
  templateUrl: './edit-transport.component.html',
  styleUrl: './edit-transport.component.css'
})


export class EditTransportComponent implements OnInit {
  transport: Transport | null = null;
  hasError: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private errorMsgService: ErrorMsgService,
  ) {}

  ngOnInit(): void {
    const transportId = this.route.snapshot.params['transportId'];
    console.log('transport from client ID:', transportId);
    // Зареждаме данните на мебелта за редактиране
    if (transportId) {
      this.apiService.getSingleTransport(transportId).subscribe((transport: Transport) => {
        this.transport = transport;
        console.log('Transport data:', this.transport);  // Проверете дали мебелта се зарежда
      });
    } else {
      console.error('Transport ID not found');
    }
  
  }

  editTransport(form: NgForm) {
    if (form.invalid) {
      console.error('Form is invalid');
      return;
    }
  
    const { name, type, capacity, price,  location, phone, imageUrl, summary } = form.value;
  
    if (!this.transport?._id) {
      console.error('Transport ID is missing');
      return;
    }
  
    // Създайте обект с актуализираните данни, като запазите стойностите на неактуализираните полета.
    const updatedTransport: Transport = {
      _id: this.transport._id, // Оставете съществуващото _id
      userId: this.transport.userId, // Запазете съществуващия userId
      owner: this.transport.owner, // Запазете съществуващия owner
      subscribers: this.transport.subscribers || [], // Запазете subscribers или задайте празен масив
      createdAt: this.transport.createdAt, // Запазете съществуващото created_at
      updatedAt: new Date().toISOString(), // Актуализирайте updatedAt с новата дата
      __v: this.transport.__v, // Запазете съществуващото __v
      name,
      type,
      capacity,
      price,
      location,
      phone,
      imageUrl,
      summary,
      //comments:[],
    };
  
    // Актуализираме мебелта чрез API
    this.apiService.updateTransport(this.transport._id, updatedTransport).subscribe({
      next: () => {
        this.hasError = false;
        this.errorMsgService.clearError();
        this.router.navigate(['/catalog-transport']); // Пренасочваме към каталога след успешна редакция
        form.reset(); // Нулираме формата
      },
      error: () => {
        this.hasError = true;
      }
    });
  }
  
  
  
}
