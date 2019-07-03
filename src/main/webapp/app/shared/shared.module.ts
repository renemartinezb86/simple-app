import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SimpleAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SimpleAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SimpleAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimpleAppSharedModule {
  static forRoot() {
    return {
      ngModule: SimpleAppSharedModule
    };
  }
}
