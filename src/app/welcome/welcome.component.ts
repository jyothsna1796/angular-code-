import { Component, OnInit } from '@angular/core';
// import { JyoserviceService } from '../jyoservice.service';
// import { Employee } from '../getemployee/model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  message: string;
receiveMessage($event) {
  this.message = $event;
}
 ngOnInit() { }

}
