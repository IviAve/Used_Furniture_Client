import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
//import { MainComponent } from './main/main.component';
import { DetailsFurnitureComponent } from './furniture/details-furniture/details-furniture.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';
import { CatalogFurnitureComponent } from './furniture/catalog-furniture/catalog-furniture.component';
import { AddFurnitureComponent } from './furniture/add-furniture/add-furniture.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { AddTransportComponent } from './transport/add-transport/add-transport.component';
import { CatalogTransportComponent } from './transport/catalog-transport/catalog-transport.component';
import { DetailsTransportComponent } from './transport/details-transport/details-transport.component';
import { EditTransportComponent } from './transport/edit-transport/edit-transport.component';
import { EditFurnitureComponent } from './furniture/edit-furniture/edit-furniture.component';
import { loggedGuard } from './guards/logged.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  //   Start - User routing
  { path: 'login', component: LoginComponent,canActivate: [loggedGuard] },
  { path: 'register', component: RegisterComponent,canActivate: [loggedGuard] },
  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuard]},
  //   End - User routing
{path: 'about-us', component: AboutUsComponent},
  // Start - furniture routing
 
 
{path:'furnitures/:furnitureId' , component: DetailsFurnitureComponent},

  {path: 'catalog-furniture',component: CatalogFurnitureComponent},
  
  // {
  //   path: 'add-furniture',
  //   loadComponent: () =>
  //     import('./furniture/add-furniture/add-furniture.component').then(
  //       (c) => c.AddFurnitureComponent
  //     ),
  //   canActivate: [AuthGuard],
  // },
  {path:'add-furniture', component: AddFurnitureComponent, canActivate: [AuthGuard]},
  
  { path:'edit-furniture/:furnitureId', component: EditFurnitureComponent,canActivate: [AuthGuard], },


  // End - furniture routing


  // start transport routing
  
  
  {
    path: 'transports/:transportId',
    component: DetailsTransportComponent,
    // canActivate: [AuthGuard], // Добави, ако е необходимо
  },
  

  {path: 'catalog-transport',component: CatalogTransportComponent},
  
  // {
  //   path: 'add-transport',
  //   loadComponent: () =>
  //     import('./transport/add-transport/add-transport.component').then(
  //       (c) => c.AddTransportComponent
  //     ),
  //   canActivate: [AuthGuard],
  // },
  
  {path:'add-transport', component: AddTransportComponent, canActivate: [AuthGuard]},
  { path:'edit-transport/:transportId', component: EditTransportComponent,canActivate: [AuthGuard], },


  

  //{ path: 'error', component: ErrorMsgComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
