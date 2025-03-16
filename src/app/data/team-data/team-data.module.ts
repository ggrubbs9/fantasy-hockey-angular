import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { companyListFeatureKey } from './feature-name.const';
import { companyListReducer } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(companyListFeatureKey, companyListReducer),
  ],
})
export class CompanyDataModule {}
