import { Component, OnInit } from '@angular/core';
import { Employee1 } from '../format';
import { CrudserviceService } from 'src/app/crudservice.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  data1: Employee1[];
  constructor(private crud: CrudserviceService, private messageService: MessageService) {
    this.crud.getEmp().subscribe((data: any) => {
      this.data1 = data;
      console.log(this.data1);
    });
  }
  // deleteUser(id) {
  //   this.crud.deleteEmp(id).subscribe(data => {
  //     // this.users = this.users.filter(item => item.id !== id);
  //     this.crud.getEmp();
  //   });
  // }
  deleteUser(id: number) {
    let index;
    index = this.data1.findIndex(x => x.id === id);
    this.data1 = this.data1.filter((val, i) => i !== index);
    this.crud.deleteEmp(id).subscribe(data => {
      console.log('deleted successfully');
      this.messageService.add({severity: 'success', summary: 'DeletedSuccessfully', detail: 'Successfully record is deleted in the table'});
    });
    }
  ngOnInit() {
  }

}
