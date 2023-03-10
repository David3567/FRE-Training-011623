import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InjectionToken, ModuleWithProviders, NgModule } from "@angular/core";
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