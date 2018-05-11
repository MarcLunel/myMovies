import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

const Material = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
]

@NgModule({
    imports: [
      CommonModule,
      ...Material
    ],
    exports: Material,
})
export class MaterialModule {}
