import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { ShareButtonComponent } from './share-button/share-button.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareButtonsPopupModule } from 'ngx-sharebuttons/popup';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { CardComponent } from './card/card.component';
import { CoreModule } from '../core/core.module';
import { FormInputFieldComponent } from './form-input-field/form-input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShareButtonComponent,
    CardComponent,
    FormInputFieldComponent
  ],
  imports: [
    CoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ShareButtonsModule,
    ShareButtonsPopupModule,
    ShareIconsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShareButtonComponent,
    CardComponent
  ]
})
export class LayoutModule { }
