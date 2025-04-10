
import { User } from './user';

export interface Furniture {
  subscribers: string[];
  
  _id: string;
  category: string; // Required, at least 5 characters
  condition: string; // Required, at least 5 characters
  delivery: string; // Required, at least 5 characters
  location: string; // Required, at least 5 characters
  phone: string; // Required, must contain only digits and be at least 5 digits long
  imageUrl: string; // Required, must be a valid image URL format
  summary: string; 
  //comments: Comment[];
  userId: User;  // Пълният обект на потребителя, който добави мебелта
  owner: string;    // Пълният обект на потребителя, който е собственик на мебелта
  createdAt: string;
  updatedAt: string;
  __v: number;
}
