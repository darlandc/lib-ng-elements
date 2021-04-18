import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';
import { NgModule } from '@angular/core';
import { NgElementsComponent } from './ng-elements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NgElementsComponent,
    PopupComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    NgElementsComponent,
    PopupComponent
  ],
  providers: [
    PopupService
  ]
})
export class NgElementsModule { }
