import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch'
import getNews from '../../services/GetNews';

jest.mock('../../services/GetNews');

describe('NewsSearch container', () => {
  it('displays a list of articles upon search', async() => {
    getNews.mockResolvedValue([
      {
        title: 'Ahhhhh',
        author: 'Fake Author',
        description: 'test description'
      }
    ]);

    render(<NewsSearch />);

    const button = screen.getByTestId('button');

    await fireEvent.click(button)

    const articlesList = await screen.findByTestId('articles-list');

    expect(articlesList).not.toBeEmptyDOMElement();
  });
});