import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/user';
import { UserService } from '../user.service';
import { ErrorMsgService } from '../../core/error-msg/error-msg.service';
import { ErrorMsgComponent } from '../../core/error-msg/error-msg.component';
import { ApiService } from '../../api.service';
import { Furniture } from '../../types/furniture';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { Transport } from '../../types/transport';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule,ErrorMsgComponent,],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  isLoading: boolean = true;
  hasError: boolean = false;
  myFurnitures: Furniture[] = [];
  myTransports: Transport[] = [];

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    tel: '',
  
  };

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    tel: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    private errorMsgService: ErrorMsgService,
    private apiService: ApiService,
    ) {}

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = { username, email, tel: tel! };

    this.form.setValue({
      username,
      email,
      tel: tel!,
    });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  handleSaveProfile() {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;

    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.toggleEditMode();
    });
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.toggleEditMode();
  }
}
