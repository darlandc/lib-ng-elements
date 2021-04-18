import { ManageAccessComponent } from './manage-access/manage-access.component';
import { ManageAccessService } from './manage-access/manage-access.service';
import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup/popup.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'lib-ng-elements',
  template: `
    <p>
      ng-elements works!
    </p>
    <input #input value="Message">
    <button (click)="popup.showAsComponent(input.value)">Show as component</button>
    <button (click)="popup.showAsElement(input.value)">Show as element</button>
    <button (click)="manageAccess.createDOMNewCustomElement(input.value)">Show Manage Acess</button>
  `,
  styles: [
  ]
})
export class NgElementsComponent implements OnInit {

  constructor(injector: Injector, public popup: PopupService, public manageAccess: ManageAccessService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);

    // Manage Access Element
    const ManageAccessElement = createCustomElement(ManageAccessComponent, {injector});
    customElements.define('manage-access-element', ManageAccessElement);
  }


  ngOnInit(): void {
  }

}
