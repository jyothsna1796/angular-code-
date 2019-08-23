import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 message: string;
  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.CurrentMesage.subscribe(message =>
      this.message = message)
  }

}
