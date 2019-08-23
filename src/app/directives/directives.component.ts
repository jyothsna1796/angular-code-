import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {


  constructor() {
    this.atool = [
      { name: 'DataBinding' },
      { name: 'ComponentCommunication' },
      { name: 'services' },
      { name: 'typescript' },
      { name: 'forms' },
      { name: 'validations' },
      { name: 'Modules' }
    ];

  }
  public title = "Hello Welcome to MAPPS";
  public colour = false;
  public style = "italic";
  public size = "35px";
  public colour1 = "red";
  Angulartopics = ['DataBinding', 'ComponentCommunication', 'services', 'typescript', 'forms', 'validations', 'Modules'];
  public val = "typescript";
  atool: any[];
  tools: string;
  showIf = false;
  value1 = null;
  prod = [];
  products = [
    { id: 1, name: 'Watch', price: '5000' },
    { id: 2, name: 'T-Shirt', price: '2000' },
    { id: 3, name: 'Bag', price: '1000' },
    { id: 4, name: 'Laptop', price: '40000' },
    { id: 5, name: 'LED TV', price: '25000' }
  ];

  click() {
    this.colour = !this.colour;
  }
  
  ngOnInit() {

  }
}
