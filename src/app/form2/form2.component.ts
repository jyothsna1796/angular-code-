import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  showdata = false;
  stuarray: any[] = [] ;
  qua: any[];
  selectedqua: string;
  filteredTools: any[];
  tools: string[] = ['MAAPS', 'INNOVATION', 'MARKETING', 'SALES', 'DATABASE', 'MIDDLEWARE', 'TESTING', 'B2B', 'DATACENTER'];
  tool: string;
  adddata = false;
  constructor() {
    this.qua = [
      {label: 'select'},
      {label: 'BTECH'},
      {label: 'MTECH'},
      {label: 'MSC'},
      {label: 'MBA'},
      {label: 'CA'},
    ];
  }
  ngOnInit() { }
  addcheck(f){
    this.adddata = true;
    //console.log(f.tempaddress);
    f.controls.peraddress.setValue(f.controls.tempaddress.value);
    //console.log(f.peraddress.value);
  }
 add(){
  this.showdata = true;
 }
 reset(f){
   f.reset();
 }
 addToTable(f){
   console.log(f.value);
  this.stuarray.push(f.value);
  
 }
  filterTools(event) {
    this.filteredTools = [];
    for (let i = 0; i < this.tools.length; i++) {
      let tool = this.tools[i];
      if (tool.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredTools.push(tool);
      }
    }
  }
}
