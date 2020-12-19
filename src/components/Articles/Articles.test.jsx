import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Articles from './Articles';

describe('Articles component', () => {
  afterEach(() => cleanup());
  it('renders Articles List', () => {
    const { asFragment } = render(<Articles
      articles={[
        {
          title: 'test-title',
          author: 'test-name',
          description: 'test-description'
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
