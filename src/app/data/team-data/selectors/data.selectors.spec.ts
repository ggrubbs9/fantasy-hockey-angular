import { Company } from 'src/app/models';
import { CompanyListState } from '../state';
import { companyListFeatureKey } from '../feature-name.const';
import { companyList } from './data.selectors';

describe('Company List Data Selector', () => {
  it('should return companys', async () => {
    const data: Company[] = [
      {
        code: 2000,
        salesOrg: 'A001',
      },
      {
        code: 2120,
        salesOrg: 'A208',
      },
    ];

    const state: Partial<CompanyListState> = {
      data: {
        ids: data.map((e) => e.code),
        entities: {
          [data[0].code]: data[0],
          [data[1].code]: data[1],
        },
      },
    };

    expect(companyList({ [companyListFeatureKey]: state })).toEqual(data);
  });
});
