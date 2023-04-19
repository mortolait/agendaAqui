import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorNameInterceptor } from '../interceptor/interceptor-name.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorNameInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
