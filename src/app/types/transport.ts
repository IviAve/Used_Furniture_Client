import { User } from './user';

export interface Transport {
  subscribers: string[];
  _id: string;
  name: string; // Required, at least 3 characters
  type: string; // Required, at least 3 characters
  capacity: string; // Required, at least 3 characters
  price: number;// Required, at least 1 characters
  location: string; // Required, at least 3 characters
  phone: string; // Required, must contain only digits and be at least 9 digits long
  imageUrl: string; // Required, must be a valid image URL format
  summary: string; 
  //comments: Comment[];
  userId: User;  // Пълният обект на потребителя, който добави мебелта
  owner: string;    // Пълният обект на потребителя, който е собственик на мебелта
  createdAt: string;
  updatedAt: string;
  __v: number;
}