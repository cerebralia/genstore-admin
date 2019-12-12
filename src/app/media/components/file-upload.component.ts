import * as _ from 'lodash';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-upload',
  template: `
    <div class="text-center upload-zone">
      FILE UPLOAD
    </div>`
})
export class FileUploadComponent {
  /**
   * option format
   * {
   *  customFields: { key: value } // additional field will be added to the form
   *  query: { key: value } // custom query string
   * }
   */
  @Input() options: any;
  public hasBaseDropZoneOver = false;
  public uploader: any;
  public multiple = false;
  public uploadOnSelect = false;
  public autoUpload = false;
  public itemName: string = null;
  public progress: any = 0;
  public onAddingFiles: any = [];
  public isDigital: any = false;

}
