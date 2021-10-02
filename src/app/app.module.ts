import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbInputModule, NbIconModule, NbSelectModule, NbTabsetModule, NbFormFieldModule, NbUserModule, NbActionsModule, NbBadgeModule, NbMenuModule, NbContextMenuModule, NbSidebarModule, NbCardModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbLayoutModule,NbButtonModule,NbCardModule,NbInputModule,NbIconModule,NbSidebarModule,NbSelectModule,NbTabsetModule,NbContextMenuModule,NbActionsModule,NbBadgeModule,NbTabsetModule,NbFormFieldModule,NbUserModule,NbAccordionModule,
    NbEvaIconsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

