import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Form2Component } from '../form2/form2.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements  AfterViewInit{
  @ViewChild(Form2Component , {static : true}) Child: Form2Component;
  tools: any[];
  constructor() { }
  ngAfterViewInit() {
    this.tools = this.Child.tools;
    console.log('array values are', this.tools);
  }
}
