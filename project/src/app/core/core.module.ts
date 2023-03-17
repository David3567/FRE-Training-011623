import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
// import { appInitializer } from "./app.initializer";
import { AuthWithLocalInterceptor } from "./interceptors/auth-with-local.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";

export const TmdbAPIKey = new InjectionToken<string>('');
export const AuthServer = new InjectionToken<string>('');
export const ApplyTmdbApiKey = new InjectionToken<string>('');

export const TmdbBaseUrl = new InjectionToken<string>('');
export const MovieImgBaseUrl = new InjectionToken<string>('');

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        CommonModule,
    ]
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders<CoreModule> {
        return {
          ngModule: CoreModule,
          providers: [
            {
              provide: AuthServer,
              useValue: 'http://localhost:4231',
            },
            {
              provide: TmdbBaseUrl,
              useValue: 'https://api.themoviedb.org/3',
            },
            {
              provide: MovieImgBaseUrl,
              useValue: 'https://image.tmdb.org/t/p',
            },
            {
              provide: ApplyTmdbApiKey,
              useValue:
                'https://developers.themoviedb.org/3/getting-started/authentication',
            },
            // {
            //   provide: APP_INITIALIZER,
            //   useFactory: appInitializer,
            //   multi: true,
            //   deps: [AuthService],
            // },
            {
              provide: HTTP_INTERCEPTORS,
              useClass: AuthWithLocalInterceptor,
              multi: true,
            },
            {
              provide: HTTP_INTERCEPTORS,
              useClass: ErrorInterceptor,
              multi: true,
            },
          ],
        };
      }
}
