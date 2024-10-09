import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
// import { File } from '@awesome-cordova-plugins/file/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicImageLoaderComponent } from './ionic-image-loader.component';

import { ImageLoaderConfigService } from './services/image-loader-config.service';
import { ImageLoaderService } from './services/image-loader.service';

@NgModule({ declarations: [IonicImageLoaderComponent],
    exports: [IonicImageLoaderComponent], imports: [IonicModule,
        CommonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class IonicImageLoader {
  static forRoot(): ModuleWithProviders<IonicImageLoader> {
    return {
      ngModule: IonicImageLoader,
      providers: [
        ImageLoaderConfigService,
        ImageLoaderService,
        // File,
      ],
    };
  }
}
