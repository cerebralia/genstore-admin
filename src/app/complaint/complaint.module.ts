import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComplaintListingComponent } from './list.component';
import { ComplainService } from './service';
import { ComplaintUpdateComponent } from './update.component';

const routes: Routes = [
  {
    path: '',
    component: ComplaintListingComponent,
    data: {
      title: 'Manage complaints',
      urls: [{ title: 'Complaints', url: '/complaints' }, { title: 'Listing' }]
    }
  },
  {
    path: 'update/:id',
    component: ComplaintUpdateComponent,
    data: {
      title: 'Manage complaints',
      urls: [{ title: 'Complaints', url: '/complaints' }, { title: 'Update Complaint' }]
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
  declarations: [
    ComplaintListingComponent,
    ComplaintUpdateComponent
  ],
  providers: [
    ComplainService
  ],
  exports: [],
  entryComponents: [
  ]
})
export class ComplaintModule { }
