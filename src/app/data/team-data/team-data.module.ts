import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { teamListFeatureKey } from './feature-name.const';
import { teamListReducer } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(teamListFeatureKey, teamListReducer),
  ],
})
export class TeamDataModule {}
