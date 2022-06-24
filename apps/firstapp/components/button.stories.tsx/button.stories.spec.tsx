import { render } from '@testing-library/react';

import ButtonStoriesTsx from './button.stories.tsx';

describe('ButtonStoriesTsx', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonStoriesTsx />);
    expect(baseElement).toBeTruthy();
  });
});
