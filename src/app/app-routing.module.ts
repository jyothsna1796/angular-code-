import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';
import { CrudComponent } from './crud/crud/crud.component';
import { AddEmpComponent } from './crud/add-emp/add-emp.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ObservablesComponent } from './rxjs/observables/observables.component';
import { OperatorsComponent } from './rxjs/operators/operators.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'form1', component: Form1Component },
  { path: 'form2', component: Form2Component },
  { path: 'directives', component: DirectivesComponent },
  { path: 'componentcommunication', component: ComponentcommunicationComponent },
  { path: 'viewchild', component: ViewchildComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'getemployee', component: GetemployeeComponent },
  {
    path: 'crud', component: CrudComponent,
    children: [
      { path: 'addemp', component: AddEmpComponent }
    ]
  },
  { path: 'typescript', component: TypescriptComponent },
  {
    path: 'observables', component: ObservablesComponent,
    children: [
      { path: 'Ope', component: OperatorsComponent }
    ]
  },
  { path: '**', component: OperatorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
