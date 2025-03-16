import { Company } from 'src/app/models';
import { dataIdSelector, sortComparer } from './index.state';

describe('companyList dataIdSelector', () => {
  it('should return id of company', () => {
    const company: Company = {
      code: 2000,
      salesOrg: 'A001',
    };

    const dataSelector = dataIdSelector(company);

    expect(dataSelector).toBe(2000);
  });

  describe('sortComparer', () => {
    it('should return -1', async () => {
      await expect(
        sortComparer(
          {
            code: 2000,
            salesOrg: 'A001',
          },
          {
            code: 2120,
            salesOrg: 'A208',
          },
        ),
      ).toBe(-1);
    });

    it('should return 1', async () => {
      await expect(
        sortComparer(
          {
            code: 2120,
            salesOrg: 'A208',
          },
          {
            code: 2000,
            salesOrg: 'A001',
          },
        ),
      ).toBe(1);
    });
  });
});
