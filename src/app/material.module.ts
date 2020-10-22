import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    exports: [
      MatToolbarModule,
      MatListModule,
      MatSidenavModule,
      MatCardModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
    ],
  })
  export class MaterialModule { }
  