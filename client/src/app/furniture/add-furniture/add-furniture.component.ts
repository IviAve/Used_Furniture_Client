import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageUrlDirective } from '../../directives/image-url.directive';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';
import { LoaderComponent } from '../../shared/loader/loader.component';


@Component({
  selector: 'app-add-furniture',
  standalone: true,
  imports: [FormsModule, ImageUrlDirective,ErrorMsgComponent],
  templateUrl: './add-furniture.component.html',
  styleUrl: './add-furniture.component.css',
})
export class AddFurnitureComponent {

  hasError: boolean = false;

  constructor(
    private apiService: ApiService,
     private router: Router,
     private errorMsgService: ErrorMsgService
     ) {}

  addFurniture(form: NgForm) {
    if (form.invalid) {
    console.error('Form is invalid');
      return;
    }

    const { category, condition, delivery, location, phone, imageUrl, summary } = form.value;

    this.apiService.createFurniture(category, condition, delivery, location, phone, imageUrl, summary).subscribe({
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


