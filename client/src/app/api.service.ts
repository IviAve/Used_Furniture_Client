import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment } from './types/comments';
import { Furniture } from './types/furniture';
import { Transport } from './types/transport';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(private http: HttpClient) {}

  

  // getLastThreeFurnitures(limit?: number ): Observable<Furniture[]> {
  //   let url = `/api/furnitures`;
  //   if (limit) {
  //     url += `?limit=${limit}`; // Append the limit query parameter
  //   }

  //   return this.http.get<Furniture[]>(url); // Return the observable of Furniture[]
  // }


  getLastThreeFurnitures(limit?: number): Observable<Furniture[]> {
    let url = '/api/furnitures';
    if (limit) {
      url += `?limit=${limit}`; // Append the limit query parameter
    }
    return this.http.get<Furniture[]>(url).pipe(
      catchError((error) => {
        console.error('Error fetching last three furnitures', error);
        throw error;
      })
    );
  }
  getFurnitures() {
    return this.http.get<Furniture[]>(`/api/furnitures`);
  }

  getSingleFurniture(furnitureId: string) {
    return this.http.get<Furniture>(`/api/furnitures/${furnitureId}`);
  }

  createFurniture(category: string, condition: string, delivery: string, location: string, phone: string, imageUrl: string, summary: string) {
    const payload = { category, condition, delivery, location, phone, imageUrl, summary };
    return this.http.post<Furniture>(`/api/furnitures`, payload);
  }

  
  updateFurniture(furnitureId: string, updatedFurniture: Furniture): Observable<Furniture> {
    
    console.log(`Requesting furniture: /api/furnitures/${furnitureId}`);

    return this.http.put<Furniture>(`/api/furnitures/${furnitureId}`, updatedFurniture);
  }
  
  



    //delete -> http.delete furniture ID

    deleteFurniture(furnitureId: string) {
      return this.http.delete(`/api/furnitures/${furnitureId}`);
    }


    getMyFurnitures(userId: string | undefined) {
      return this.http.get<Furniture[]>(`/api/furnitures?userId=${userId}`);
    }
    

    // TRANSPORT SERVICE

    getTransports() {
      return this.http.get<Transport[]>(`/api/transports`);
    }
  
    getSingleTransport(transportId: string) {
      return this.http.get<Transport>(`/api/transports/${transportId}`);
    }
  
    createTransport(name: string, type: string, capacity: string, price: number, location: string, phone: string, imageUrl: string, summary: string) {
      const payload = { name, type, capacity, price, location, phone, imageUrl, summary };
      return this.http.post<Transport>(`/api/transports`, payload);
    }
  
    
    updateTransport(transportId: string, updatedTransport: Transport): Observable<Transport> {
      
      console.log(`Requesting transport: /api/transports/${transportId}`);
  
      return this.http.put<Transport>(`/api/transports/${transportId}`, updatedTransport);
    }
    
    
  
    getComments(transportId: string): Observable<any[]> {
      return this.http.get<any[]>(`/api/transport/${transportId}/comments`);
    }
    
    addComment(transportId: string, comment: string): Observable<any> {
      return this.http.post(`/api/transport/${transportId}/comments`, { comment });
    }
    
  
    //   //delete -> http.delete transport ID
  
      deleteTransport(transportId: string) {
        return this.http.delete(`/api/transports/${transportId}`);
      }

    
   
      likeFurniture(furnitureId: string) {
        return this.http.put(`/api/furnitures/${furnitureId}/subscribe`, {});
      }

      likeTransport(transportId: string) {
        return this.http.put(`/api/transports/${transportId}/subscribe`, {});
      }
  }



  
  

 
  
  
 
