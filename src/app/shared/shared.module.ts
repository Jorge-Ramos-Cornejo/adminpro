import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { RouterModule } from '@angular/router';

import {MatFormFieldModule, MatInputModule, MatToolbarModule,
MatTableModule, MatPaginatorModule, MatProgressSpinnerModule,
MatButtonModule, MatIconModule, MatTooltipModule, MatButtonToggleModule, MatRadioGroup, MatRadioModule,
MatBadgeModule, MatExpansionModule, MatSelectModule, MatDividerModule, MatDatepickerModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule
} from '@angular/forms';

// components
import { BotonOpcionesComponent } from './+components/boton-opciones/boton-opciones.component';
import { IconosPersonalizadosComponent } from './+components/iconos-personalizados/iconos-personalizados.component';
import { UsuarioAddUpdateComponent } from 'src/app/pages/usuario/usuario-add-update/usuario-add-update.component';
import { OficinaAddUpdateComponent } from 'src/app/pages/oficina/oficina-add-update/oficina-add-update.component';
import { BlockUIModule } from 'ng-block-ui';
import { AlertModule } from 'ngx-alerts';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MatInputModule,
        BlockUIModule.forRoot(),
        MatBadgeModule,
        MatButtonToggleModule,
        MatRadioModule,
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
        ReactiveFormsModule,
        AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
        
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
        MatRadioModule,
        MatDividerModule,
        MatDatepickerModule,
        MatTooltipModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        AlertModule,
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
        OficinaAddUpdateComponent,
        BlockUIModule
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