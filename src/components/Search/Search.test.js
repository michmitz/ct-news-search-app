import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search'

describe('Search component', () => {
  afterEach(() => cleanup());
  it('updates display on search', () => {
    const { asFragment } = render(<Search
      search=""
      onChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});