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
MatBadgeModule, MatExpansionModule, MatSelectModule, MatDividerModule, MatDatepickerModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule
} from '@angular/forms';

// components
import { BotonOpcionesComponent } from './+components/boton-opciones/boton-opciones.component';
import { IconosPersonalizadosComponent } from './+components/iconos-personalizados/iconos-personalizados.component';
import { UsuarioAddUpdateComponent } from 'src/app/pages/usuario/usuario-add-update/usuario-add-update.component';
import { OficinaAddUpdateComponent } from 'src/app/pages/oficina/oficina-add-update/oficina-add-update.component';

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
        MatDatepickerModule,
        MatSelectModule,
        ReactiveFormsModule        
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        BotonOpcionesComponent,
        IconosPersonalizadosComponent,
        UsuarioAddUpdateComponent,
        OficinaAddUpdateComponent
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
        MatDatepickerModule,
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
        BotonOpcionesComponent,
        UsuarioAddUpdateComponent,
        OficinaAddUpdateComponent
    ],
    entryComponents: [
        UsuarioAddUpdateComponent,
        OficinaAddUpdateComponent
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: SharedModule
        };
      }
 }