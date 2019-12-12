import { ImageCropperModule } from 'ngx-image-cropper';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FileUploadComponent } from './components/file-upload.component';
import { FileSelectComponent, MediaModalComponent } from './components/media-select.component';
import { MediaPreviewComponent } from './components/preview.component';
import { MediaService } from './service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ImageCropperModule
  ],
  exports: [
    FileSelectComponent,
    FileUploadComponent,
    MediaPreviewComponent
  ],
  declarations: [
    FileSelectComponent,
    FileUploadComponent,
    MediaModalComponent,
    MediaPreviewComponent
  ],
  entryComponents: [
    MediaModalComponent
  ],
  providers: [
    MediaService
  ]
})

export class MediaModule { }
