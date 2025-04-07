import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

import { trigger, transition, style, animate, keyframes } from '@angular/animations'; 

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  
  animations: [
    trigger('typing', [
      transition(':enter', [
        animate('4s steps(30)', style({ width: '100%' })) // Изписване на текста
      ])
    ])
  ]
})
export class AboutUsComponent {
  constructor(private apiService: ApiService) {}
  
}
