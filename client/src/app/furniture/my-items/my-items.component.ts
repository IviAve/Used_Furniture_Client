import { Component,OnInit } from '@angular/core';


import { ApiService } from '../../api.service';
import { Furniture } from '../../types/furniture';
import { Transport} from '../../types/transport';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '../../shared/pipes/slice.pipe';
import { ElapsedTimePipe } from '../../shared/pipes/elapsed-time.pipe';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-my-items',
  standalone: true,
  imports: [LoaderComponent, RouterLink, SlicePipe, ElapsedTimePipe],
  templateUrl: './my-items.component.html',
  styleUrl: './my-items.component.css'
})
export class MyItemsComponent implements OnInit {
furnitures: Furniture[] = [];
transports: Transport[] = [];
isLoading = true;

constructor (
  private apiService: ApiService,
  private userService: UserService

) {}

ngOnInit(): void {
  this.apiService.getMyFurnitures(this.userService.user?._id).subscribe((furnitures) => {
    this.furnitures = furnitures;      
    this.isLoading = false;
  });
}
}
