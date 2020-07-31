import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { OptionsComponent } from './options/options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        ColorPickerComponent,
        OptionsComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        ColorPickerComponent,
        OptionsComponent
    ]
})
export class SharedModule {}
