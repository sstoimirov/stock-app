import { render } from '@testing-library/react';

import StockAppUi from './ui';

describe('StockAppUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StockAppUi />);
    expect(baseElement).toBeTruthy();
  });
});
