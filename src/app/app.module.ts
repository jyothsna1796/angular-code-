import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomepageComponent } from './homepage/homepage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Form1Component } from './form1/form1.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {SliderModule} from 'primeng/slider';
import {InputMaskModule} from 'primeng/inputmask';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {RatingModule} from 'primeng/rating';
import {PasswordModule} from 'primeng/password';
import {AccordionModule} from 'primeng/accordion';
import {ListboxModule} from 'primeng/listbox';
import { Form2Component } from './form2/form2.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToolbarModule} from 'primeng/toolbar';
import { EqualValidatorDirective } from './equal-validator.directive';
import { PrimengModule } from './primeng/primeng.module';
import { MustMatchDirective } from './MustMatchDirective.directive';
import { CustomDirective } from './directives/CustomDirective.directive';
import { CpIfDirective } from './cp-if.directive';
import { CommonModule } from '@angular/common';
import { CpforDirective } from './cpfor.directive';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { OutputComponent } from './output/output.component';
import { JyoserviceService } from './jyoservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { PipesComponent } from './pipes/pipes.component';
import { PsortPipe } from './psort.pipe';
import {TabViewModule} from 'primeng/tabview';
import { DatabindingComponent } from './databinding/databinding.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { CrudserviceService } from './crudservice.service';
import { CrudModule } from './crud/crud.module';
import { CrudComponent } from './crud/crud/crud.component';
import { SalaryComponent } from './salary/salary.component';
import {MessageModule} from 'primeng/message';
import { RadioComponent } from './radio/radio.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TypescriptComponent } from './typescript/typescript.component';
import { Observable } from 'rxjs';
import { RxjsModule } from './rxjs/rxjs.module';
import {CaptchaModule} from 'primeng/captcha';
import { DirectivesModule } from './directives/directives.module';
import { DirectivesComponent } from './directives/directives.component';

//import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WelcomeComponent,
    Form1Component,
    Form2Component,
    ToolbarComponent,
    EqualValidatorDirective,
    MustMatchDirective,
    CustomDirective,
    CpIfDirective,
    CpforDirective,
    ComponentcommunicationComponent,
    ViewchildComponent,
    OutputComponent,
    ParentComponent,
    SiblingComponent,
    PipesComponent,
    PsortPipe,
    DatabindingComponent,
    GetemployeeComponent,
    CrudComponent,
    SalaryComponent,
    RadioComponent,
    TypescriptComponent,
   DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    CalendarModule,
    RadioButtonModule,
    CheckboxModule,
    AccordionModule,
    SliderModule,
    InputMaskModule,
    AutoCompleteModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    FileUploadModule,
    RatingModule,
    PasswordModule,
    ListboxModule,
    InputSwitchModule,
    FormsModule,
    SidebarModule,
    PanelMenuModule,
    ToolbarModule,
    PrimengModule,
    CommonModule,
    BrowserModule,
    ToggleButtonModule,
    HttpClientModule,
    TabViewModule,
    CrudModule,
    MessageModule,
    MatSlideToggleModule,
    ToastModule,
    RxjsModule,
    CaptchaModule,
    DirectivesModule
  ],
  providers: [
    JyoserviceService,
    CrudserviceService,
    MessageService
],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
