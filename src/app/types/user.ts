export interface User {
  // furnitures: string[];
  // transports: string[];
  
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserForAuth {
  username: string;
  email: string;
  tel?: string;
  password: string;
  _id: string;
}

export interface ProfileDetails {
  username: string;
  email: string;
  tel: string;
  
}
