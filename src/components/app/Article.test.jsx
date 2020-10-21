import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article'

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders article', () => {
    const { asFragment } = render(<Article
      title="Test Title"
      author="test-author"
      description="test-description"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
