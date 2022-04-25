import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Item } from './gallery.model';
import { DataStorageService } from '../shared/data.storage.service';
import { GalleryService } from './gallery.service';

@Injectable({ providedIn: 'root' })
export class GalleryResolverService implements Resolve<Item[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private galleryService: GalleryService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const items = this.galleryService.getItems();

    if (items.length === 0) {
      return this.dataStorageService.fetchItems();
    } else {
      return items;
    }
  }
}
