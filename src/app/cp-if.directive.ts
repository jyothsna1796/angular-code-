import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cpIf]'
})
export class CpIfDirective {
  showCpIf: boolean;

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef) { }
    @Input() set cpIf(condition: boolean) {
    if (condition) {
    this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
    this.viewContainer.clear();
    }
  }
}
