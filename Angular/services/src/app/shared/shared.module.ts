import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../injector/logger.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LoggerService],
})
export class SharedModule {}
