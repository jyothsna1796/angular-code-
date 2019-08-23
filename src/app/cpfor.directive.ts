import { TemplateRef, Input, ViewContainerRef, Directive } from '@angular/core';
@Directive({
    selector: '[cpfor]'
  })
export class CpforDirective {
    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }
    @Input('cpfor') set loop([]: string) {
        for(var i=0;i<length;i++){
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}