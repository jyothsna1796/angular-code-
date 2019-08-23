import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
      label: 'File',
      icon: 'pi pi-pw pi-file',
      items: [
      {
      label: 'ReactiveForms',
      icon: 'pi pi-fw pi-plus',
      routerLink: '/form1',
      routerLinkActiveOptions: 'active'
      },
      {
        label: 'Directives',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/directives',
        routerLinkActiveOptions: 'active'
      },
      {
          label: 'ComponentComm(@input)',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/componentcommunication',
          routerLinkActiveOptions: 'active'
      },
      {
        label: 'ComponentComm(@viewchild)',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/viewchild',
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'ComponentComm(@output)',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/welcome',
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'ComponentComm(Service file)',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/parent',
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'pipes',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/pipes',
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'DataBinding',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/databinding',
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'get service',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/getemployee',
        routerLinkActiveOptions: 'active'
      },
      {
      label: 'TemplateDrivenForms',
      icon: 'pi pi-fw pi-external-link',
      routerLink: '/form2'
      },
      {
        label: 'crud',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/crud',
        routerLinkActiveOptions: 'active'
      },
      {
        label: 'typescript',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/typescript',
        routerLinkActiveOptions: 'active'
      }
      ]
      },
      {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
      { label: 'rxjs',
       icon: 'pi pi-fw pi-plus' ,
       routerLink: '/observables',
       routerLinkActiveOptions: 'active'
      },
      {
      label: 'TemplateDrivenForms',
      icon: 'pi pi-fw pi-external-link'
      }
      ]
      },
      {
      label: 'Actions',
      icon: 'pi pi-fw pi-cog',
      items: [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Actions', icon: 'pi pi-fw pi-cog' }
      ]
      }
      ];
  }

}
