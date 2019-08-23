import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  message ="hello welcome to miracle";
  @Output() messageEvent = new EventEmitter();
  constructor() { }
 sendMessage(){
  this.messageEvent.emit(this.message);
  console.log(this.message);
 }
  ngOnInit() {
  }

}
