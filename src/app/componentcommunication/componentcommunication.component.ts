import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentcommunication',
  templateUrl: './componentcommunication.component.html',
  styleUrls: ['./componentcommunication.component.scss']
})
export class ComponentcommunicationComponent implements OnInit {
 @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
