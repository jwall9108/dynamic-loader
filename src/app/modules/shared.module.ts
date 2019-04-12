import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DynamicLoaderModule } from '@modules/dynamic-loader/dynamic-loader.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        DynamicLoaderModule,
    ],

    exports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        CommonModule,
        DynamicLoaderModule
    ]
})
export class SharedModule {
}
