import { createFeatureSelector } from '@ngrx/store';
import { CompanyListState } from '../state';
import { companyListFeatureKey } from '../feature-name.const';

export const companyListFeatureSelector =
  createFeatureSelector<CompanyListState>(companyListFeatureKey);
