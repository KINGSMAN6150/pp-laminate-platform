import { MOCK_PRODUCTS } from '../lib/mock-products';
import { formatCurrency } from '../lib/utils';

describe('Public Web App Smoke Tests', () => {
  it('should have mock catalogue products available', () => {
    expect(MOCK_PRODUCTS.length).toBeGreaterThan(0);
    const sample = MOCK_PRODUCTS.find((p) => p.code === 'SF2042');
    expect(sample).toBeDefined();
    expect(sample?.brand).toBe('PP Signature');
  });

  it('should correctly format currency in INR', () => {
    const formatted = formatCurrency(2450);
    expect(formatted).toContain('2,450');
  });
});
