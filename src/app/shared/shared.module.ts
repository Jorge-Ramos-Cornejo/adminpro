import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { RouterModule } from '@angular/router';

import {MatFormFieldModule, MatInputModule, MatToolbarModule,
MatTableModule, MatPaginatorModule, MatProgressSpinnerModule,
MatButtonModule, MatIconModule, MatTooltipModule, MatButtonToggleModule,
MatBadgeModule, MatExpansionModule, MatSelectModule, MatDividerModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule
} from '@angular/forms';

// components
import { BotonOpcionesComponent } from './+components/boton-opciones/boton-opciones.component';
import { IconosPersonalizadosComponent } from './+components/iconos-personalizados/iconos-personalizados.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MatInputModule,
        MatBadgeModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatExpansionModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatDividerModule,
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule        
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        BotonOpcionesComponent,
        IconosPersonalizadosComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        MatInputModule,
        MatBadgeModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatTooltipModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        CommonModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatTableModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        BotonOpcionesComponent
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: SharedModule
        };
      }
 }