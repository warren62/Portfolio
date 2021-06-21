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


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShareButtonComponent,
    CardComponent
  ],
  imports: [
    MaterialModule,
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
