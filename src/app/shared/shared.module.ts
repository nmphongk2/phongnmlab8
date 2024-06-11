import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, HighlightDirective, UppercasePipe]
})
export class SharedModule { }
