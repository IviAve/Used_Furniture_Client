import { Furniture } from './furniture';
import { User } from './user';
import { Transport} from './transport';

export interface Comment {
  
  _id: string;
  text: string;
  userId: User;
  furnitureId: Furniture;
  transportId: Transport;
  createdAt: string;
  updatedAt: string;
  __v: number;

  // likes: string[];
}