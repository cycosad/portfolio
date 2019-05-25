import {Component, OnInit, Input, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
  // providers: [
  //   {provide: MAT_DIALOG_DATA, useValue: {}},
  //   { provide: MatDialogRef, useValue: {}}
  // ],
})
export class ImageViewComponent implements OnInit {

  src;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.src = this.data.src;
  }

}
