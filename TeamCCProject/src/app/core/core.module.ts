import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateInterceptor } from './interceptor/update.interceptor';
import { RefreshTokenInterceptor } from './interceptor/refresh-token.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: UpdateInterceptor,
    //   multi: true
    // }
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        //* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Angular initializer;
        // {
        //   provide: APP_INITIALIZER,
        //   useFactory: appInitializer,
        //   multi: true,
        //   deps: [AuthNgrxService],
        // },
        //* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Interceptors;
        {
          provide: HTTP_INTERCEPTORS,
          useClass: UpdateInterceptor,
          multi: true,
        },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: RefreshTokenInterceptor,
        //   multi: true,
        // },
      ],
    };
  }
}
