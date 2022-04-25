import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { GalleryDivComponent } from './gallery-div/gallery-div.component';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopicsComponent } from './topics/topics.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormbtnComponent } from './chatbot/formbtn/formbtn.component';
import { FormsComponent } from './chatbot/forms/forms.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { GalleryCategoryComponent } from './gallery/gallery-category/gallery-category.component';
import { GalleryService } from './gallery/gallery.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryEditComponent } from './gallery/gallery-edit/gallery-edit.component';
import { GalleryStartComponent } from './gallery/gallery-start/gallery-start.component';
import { GalleryItemComponent } from './gallery/gallery-list/gallery-item/gallery-item.component';
import { GalleryTextComponent } from './gallery/gallery-text/gallery-text.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TekstiService } from './gallery/teksti.service';
import { GalleryTextShowComponent } from './gallery/gallery-text/gallery-text-show/gallery-text-show.component';
import { TopicsShowComponent } from './topics/topics-show/topics-show.component';
import { KorjauksetComponent } from './korjaukset/korjaukset.component';
import { RemontitComponent } from './remontit/remontit.component';
import { GalleryCategoryBackComponent } from './gallery/gallery-category/gallery-category-back/gallery-category-back.component';
import { MuutpalvelutComponent } from './muutpalvelut/muutpalvelut.component';
import { KorjauksetDetailComponent } from './korjaukset/korjaukset-detail/korjaukset-detail.component';
import { KorjauksetEditComponent } from './korjaukset/korjaukset-edit/korjaukset-edit.component';
import { KorjauksetItemComponent } from './korjaukset/korjaukset-list/korjaukset-item/korjaukset-item.component';
import { KorjauksetListComponent } from './korjaukset/korjaukset-list/korjaukset-list.component';
import { KorjauksetTextComponent } from './korjaukset/korjaukset-text/korjaukset-text.component';
import { MuutpalvelutDetailComponent } from './muutpalvelut/muutpalvelut-detail/muutpalvelut-detail.component';
import { MuutpalvelutEditComponent } from './muutpalvelut/muutpalvelut-edit/muutpalvelut-edit.component';
import { MuutpalvelutListComponent } from './muutpalvelut/muutpalvelut-list/muutpalvelut-list.component';
import { MuutpalvelutTextComponent } from './muutpalvelut/muutpalvelut-text/muutpalvelut-text.component';
import { MuutpalvelutItemComponent } from './muutpalvelut/muutpalvelut-list/muutpalvelut-item/muutpalvelut-item.component';
import { RemontitDetailComponent } from './remontit/remontit-detail/remontit-detail.component';
import { RemontitEditComponent } from './remontit/remontit-edit/remontit-edit.component';
import { RemontitListComponent } from './remontit/remontit-list/remontit-list.component';
import { RemontitTextComponent } from './remontit/remontit-text/remontit-text.component';
import { RemontitItemComponent } from './remontit/remontit-list/remontit-item/remontit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    GalleryDivComponent,
    FooterComponent,
    AuthComponent,
    HomepageComponent,
    TopicsComponent,
    ChatbotComponent,
    FormbtnComponent,
    FormsComponent,
    GalleryDetailComponent,
    GalleryCategoryComponent,
    GalleryStartComponent,
    HomepageComponent,
    GalleryCategoryComponent,
    GalleryListComponent,
    GalleryComponent,
    GalleryEditComponent,
    GalleryItemComponent,
    GalleryTextComponent,
    GalleryTextShowComponent,
    TopicsShowComponent,
    KorjauksetComponent,
    RemontitComponent,
    GalleryCategoryBackComponent,
    MuutpalvelutComponent,
    KorjauksetDetailComponent,
    KorjauksetEditComponent,
    KorjauksetItemComponent,
    KorjauksetListComponent,
    KorjauksetTextComponent,
    MuutpalvelutDetailComponent,
    MuutpalvelutEditComponent,
    MuutpalvelutListComponent,
    MuutpalvelutTextComponent,
    MuutpalvelutItemComponent,
    RemontitDetailComponent,
    RemontitEditComponent,
    RemontitListComponent,
    RemontitTextComponent,
    RemontitItemComponent,



  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ScrollingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatToolbarModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [ScrollDispatcher, TekstiService, GalleryService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

