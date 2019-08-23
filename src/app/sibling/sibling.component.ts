import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
message: string;
  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.CurrentMesage.subscribe(message =>
      this.message = message)
  }
   newMessage(){
     this.data.changeMessage("this is new message from sibling component")
   }

}
