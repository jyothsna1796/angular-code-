import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[CustomIf]'
})
export class CustomDirective {
    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }
    @Input() set CustomIf(val) {
        if (val) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}