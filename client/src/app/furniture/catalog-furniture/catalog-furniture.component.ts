import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Furniture } from '../../types/furniture';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '../../shared/pipes/slice.pipe';
import { ElapsedTimePipe } from '../../shared/pipes/elapsed-time.pipe';
import { DatePipe } from '@angular/common';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';


@Component({
  selector: 'app-catalog-furniture',
  standalone: true,
  imports: [LoaderComponent, RouterLink, SlicePipe, DatePipe,ElapsedTimePipe,ErrorMsgComponent],
  templateUrl: './catalog-furniture.component.html',
  styleUrl: './catalog-furniture.component.css',
})
export class CatalogFurnitureComponent implements OnInit {
  furnitures: Furniture[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(private apiService: ApiService, 
    private errorMsgService: ErrorMsgService
  ) {
    this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });
  }

  ngOnInit() {
    this.apiService.getFurnitures().subscribe({
      next: (furnitures) => {
        this.furnitures = furnitures;
        this.isLoading = false;
        this.hasError = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
      
    });
  }
}
