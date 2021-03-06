import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'angular-sortablejs';
import { OrderRoutingModule } from './order.routing';

import { ViewComponent } from './components/view/view.component';
import { ListingComponent } from './components/listing/listing.component';

import { OrderService } from './services/order.service';

import { NoImagePipe, NoPhotoPipe } from '../shared/pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SortablejsModule,
    //our custom module
    OrderRoutingModule,
    NgbModule
  ],
  declarations: [
    ViewComponent,
    ListingComponent,
    NoImagePipe,
    NoPhotoPipe
  ],
  providers: [
    OrderService
  ],
  exports: []
})
export class OrderModule { }
