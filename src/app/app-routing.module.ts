import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryEditComponent } from './gallery/gallery-edit/gallery-edit.component';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { GalleryTextComponent } from './gallery/gallery-text/gallery-text.component';
import { KorjauksetComponent } from './korjaukset/korjaukset.component';
import { KorjauksetEditComponent } from './korjaukset/korjaukset-edit/korjaukset-edit.component';
import { KorjauksetDetailComponent } from './korjaukset/korjaukset-detail/korjaukset-detail.component';
import { KorjauksetListComponent } from './korjaukset/korjaukset-list/korjaukset-list.component';
import { MuutpalvelutComponent } from './muutpalvelut/muutpalvelut.component';
import { MuutpalvelutDetailComponent } from './muutpalvelut/muutpalvelut-detail/muutpalvelut-detail.component';
import { MuutpalvelutEditComponent } from './muutpalvelut/muutpalvelut-edit/muutpalvelut-edit.component';
import { MuutpalvelutListComponent } from './muutpalvelut/muutpalvelut-list/muutpalvelut-list.component';
import { RemontitComponent } from './remontit/remontit.component';
import { RemontitDetailComponent } from './remontit/remontit-detail/remontit-detail.component';
import { RemontitEditComponent } from './remontit/remontit-edit/remontit-edit.component';
import { RemontitListComponent } from './remontit/remontit-list/remontit-list.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';




const appRoutes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'gallery', component: GalleryComponent,

    children: [
      { path: '', component: GalleryListComponent, },
      { path: 'new', component: GalleryEditComponent, canActivate: [AuthGuard], },
      { path: ':id', component: GalleryDetailComponent, },
      { path: ':id/edit', component: GalleryEditComponent, canActivate: [AuthGuard], },

    ]
  },

  {
    path: 'korjaukset', component: KorjauksetComponent,

    children: [
      { path: '', component: KorjauksetListComponent, },
      { path: 'new', component: KorjauksetEditComponent, canActivate: [AuthGuard], },
      { path: ':id', component: KorjauksetDetailComponent, canActivate: [AuthGuard], },
      { path: ':id/edit', component: KorjauksetEditComponent, canActivate: [AuthGuard], },
    ]
  },

  {
    path: 'muutpalvelut', component: MuutpalvelutComponent,

    children: [
      { path: '', component: MuutpalvelutListComponent, },
      { path: 'new', component: MuutpalvelutEditComponent, canActivate: [AuthGuard], },
      { path: ':id', component: MuutpalvelutDetailComponent, canActivate: [AuthGuard], },
      { path: ':id/edit', component: MuutpalvelutEditComponent, canActivate: [AuthGuard], },
    ]
  },

  {
    path: 'remontit', component: RemontitComponent,

    children: [
      { path: '', component: RemontitListComponent, },
      { path: 'new', component: RemontitEditComponent, canActivate: [AuthGuard], },
      { path: ':id', component: RemontitDetailComponent, canActivate: [AuthGuard], },
      { path: ':id/edit', component: RemontitEditComponent, canActivate: [AuthGuard], },
    ]
  },


  { path: 'text', component: GalleryTextComponent, canActivate: [AuthGuard], },
  { path: 'text/:id', component: GalleryTextComponent, canActivate: [AuthGuard], },
  { path: 'auth', component: AuthComponent },

];






@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }

