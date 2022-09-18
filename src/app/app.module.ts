import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-Routing/app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { CardAddBtnComponent } from './Components/card-add-btn/card-add-btn.component';
import { MainComponent } from './Components/main/main.component';
import { CartModalComponent } from './Components/cart-modal/cart-modal.component';
import { CardComponent } from './Components/card/card.component';
import { CartItemComponent } from './Components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardAddBtnComponent,
    MainComponent,
    CartModalComponent,
    CardComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
