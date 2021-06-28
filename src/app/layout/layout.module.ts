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
import { FormSelectComponent } from './form-select/form-select.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardViewComponent } from './card-view/card-view.component';

import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NavigationComponent } from './navigation/navigation.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { CardImageViewerComponent } from './card-image-viewer/card-image-viewer.component';
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';


import { effects } from './store/effects';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SpinnerComponent } from './spinner/spinner.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShareButtonComponent,
    CardComponent,
    FormInputFieldComponent,
    FormSelectComponent,
    CardViewComponent,
    CardCarouselComponent,
    NavigationComponent,
    ImageViewerComponent,
    CardImageViewerComponent,
    CardDashboardComponent,
    SpinnerComponent
  ],
  imports: [
    CoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ShareButtonsModule,
    ShareButtonsPopupModule,
    ShareIconsModule,
    FlexLayoutModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CommonModule,
    StoreModule.forFeature('layout', reducers),
    EffectsModule.forFeature(effects)

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShareButtonComponent,
    CardComponent,
    FormInputFieldComponent,
    FormSelectComponent,
    FlexLayoutModule,
    CardViewComponent,
    CardCarouselComponent,
    MaterialModule,
    NavigationComponent,
    ImageViewerComponent,
    CardImageViewerComponent,
    CardDashboardComponent,
    SpinnerComponent
  ],
  providers: [AlertConfig]
})
export class LayoutModule { }
