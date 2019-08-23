import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
title = 'Miracle APPS';
name = 'Jyothsna';
id = '4293';
data = 'Angular Training ';
value = '';

originalname = `pujala ${this.name}`;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  changeData() {
    this.data = 'SpringBoot';
  }
  showResponse(event) {
    this.messageService.add({severity: 'info', summary: 'Succees', detail: 'User Responded', sticky: true});
}

}
