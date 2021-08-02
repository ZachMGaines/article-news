/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  it('renders Search', () => {
    const { asFragment } = render(
      <Search text="dog"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
