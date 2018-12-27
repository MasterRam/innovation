import { NgModule } from "@angular/core";

import { GalleryComponent } from "./gallery.component";
import { GalleryUploaderComponent } from "./uploader/uploader.component";
import { GalleryCollectionComponent } from "./collection/gallery-collection.component";

@NgModule({
  imports: [],
  exports: [
    GalleryComponent,
    // GalleryUploaderComponent,
    // GalleryCollectionComponent
  ],
  declarations: [
    GalleryComponent,
    GalleryUploaderComponent,
    GalleryCollectionComponent
  ],
  providers: []
})
export class GalleryModule {}
 