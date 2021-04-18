import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { ManageAccessComponent } from './manage-access.component';


@Injectable()
export class ManageAccessService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  createDOMNewCustomElement(message: string): void {
    // Create element
    const wrapperEl: NgElement & WithProperties<ManageAccessComponent> = document.createElement('manage-access-element') as any;

    // Listen to the close event
    wrapperEl.addEventListener('closed', () => document.body.removeChild(wrapperEl));

    // Set the message
    wrapperEl.message = message;

    // Add to the DOM
    document.body.appendChild(wrapperEl);

    debugger

  }
}
