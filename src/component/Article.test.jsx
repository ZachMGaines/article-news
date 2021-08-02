/**
 * @jest-environment jsdom
 */


import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  it('renders Article', () => {
    const { asFragment } = render(
      <Article
        title="Test title"
        author="Test author"
        description="Test description"
        urlToImage="http"
        url="hi"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
