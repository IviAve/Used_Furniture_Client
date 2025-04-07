import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageUrlDirective } from '../../directives/image-url.directive';

import { ErrorMsgService } from '../../core/error-msg/error-msg.service';

import { LoaderComponent } from '../../shared/loader/loader.component';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';


@Component({
  selector: 'app-add-transport',
  standalone: true,
  imports: [FormsModule, ImageUrlDirective, ErrorMsgComponent],
  templateUrl: './add-transport.component.html',
  styleUrl: './add-transport.component.css',
})
export class AddTransportComponent {

  hasError: boolean = false;

  constructor(private apiService: ApiService,
     private router: Router,
     private errorMsgService: ErrorMsgService
     ) {}

  addTransport(form: NgForm) {
    if (form.invalid) {
    console.error('Form is invalid');
      return;
    }

    const { name, type, capacity, price,  location, phone, imageUrl, summary } = form.value;

    this.apiService.createTransport(name, type, capacity, price,  location, phone, imageUrl, summary).subscribe({
      next: () => {
        this.hasError = false;
        this.errorMsgService.clearError();
        this.router.navigate(['/catalog-furniture']);
        form.reset()  // for reset form 
      },
      error: () => {
        this.hasError = true;
      }
  });

}
  
}


