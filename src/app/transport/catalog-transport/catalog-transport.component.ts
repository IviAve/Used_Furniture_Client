

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Transport } from '../../types/transport';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '../../shared/pipes/slice.pipe';
import { ElapsedTimePipe } from '../../shared/pipes/elapsed-time.pipe';
import { DatePipe } from '@angular/common';

import { ErrorMsgService } from '../../core/error-msg/error-msg.service';


import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';

@Component({
  selector: 'app-catalog-transport',
  standalone: true,
  imports: [LoaderComponent, RouterLink,ElapsedTimePipe, SlicePipe, DatePipe,ErrorMsgComponent],
  templateUrl: './catalog-transport.component.html',
  styleUrl: './catalog-transport.component.css'
})

export class CatalogTransportComponent implements OnInit {
  transports: Transport[] = [];
  isLoading = true;
  hasError: boolean = false;

  constructor(
    
    private apiService: ApiService, 
    private errorMsgService: ErrorMsgService,
    )
     {this.errorMsgService.apiError$.subscribe((err) => {
      this.hasError = !!err;
    });}

  ngOnInit() {
    this.apiService.getTransports().subscribe({
      next: (transports) => {this.transports = transports;
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