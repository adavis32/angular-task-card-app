//modules
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//components
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
